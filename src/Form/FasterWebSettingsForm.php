<?php

namespace Drupal\fasterweb\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Configure example settings for this site.
 */
class FasterWebSettingsForm extends ConfigFormBase {

  /**
   * Config settings.
   *
   * @var string
   */
  const SETTINGS = 'fasterweb.settings';

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'fasterweb_admin_settings';
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      static::SETTINGS,
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form = parent::buildForm($form, $form_state);
    $config = $this->config(static::SETTINGS);

    $form['description'] = [
      '#type' => 'item',
      '#markup' => $this->t('Welcome to the FasterWeb settings. 
      To test FasterWeb open in an incognito browser window because it only 
      enabled for anonymous (non logged-in) users'),
    ];

    $form['debug_mode'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Debug Mode'),
      '#description' => t('Print messages to console so you can see what FasterWeb is doing.'),
      '#default_value' => $config->get('debug_mode'),
    ];

    // Exclude tab.
    $form['exclude'] = [
      '#type' => 'details',
      '#title' => $this->t('Exclude paths (optional)'),
      '#description' => $this->t('Add paths that need to be excluded from FasterWeb. Include the forward slash at the beginning of the path and you can use the * wildcard if necessary.'),
      '#group' => 'settings',
    ];
    $form['exclude']['urls_exclude'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Exclude these paths'),
      '#description' => $this->t('We can exclude pages where FasterWeb does not work.'),
      '#default_value' => $config->get('urls_exclude'),
      '#attributes' => [
        'style' => 'max-width: 600px;',
      ],
    ];
    $form['exclude']['urls_do_not_prefetch'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Do not prefetch these paths'),
      '#description' => $this->t('We do not want to prefetch links like the logout link.'),
      '#default_value' => $config->get('urls_do_not_prefetch'),
      '#maxlength' => 128,
      '#size' => 128,
      '#attributes' => [
        'style' => 'max-width: 600px;',
      ],
    ];

    // Include tab.
    $form['include'] = [
      '#type' => 'details',
      '#title' => $this->t('Include paths (optional)'),
      '#description' => $this->t('Add paths to be included for FasterWeb.  Normally this is empty to include <strong>all</strong> pages. If adding paths, include the forward slash at the beginning of the path and you can use the * wildcard if necessary.'),
      '#group' => 'settings',
    ];
    $form['include']['urls_include'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Include these paths'),
      '#description' => $this->t('Do you want to include only certain paths?'),
      '#default_value' => $config->get('urls_include'),
      '#attributes' => [
        'style' => 'max-width: 600px;',
      ],
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    // Retrieve the configuration.
    $this->configFactory->getEditable(static::SETTINGS)
      // Set the submitted configuration setting.
      ->set('debug_mode', $form_state->getValue('debug_mode'))
      ->set('urls_exclude', $form_state->getValue('urls_exclude'))
      ->set('urls_do_not_prefetch', $form_state->getValue('urls_do_not_prefetch'))
      ->set('urls_include', $form_state->getValue('urls_include'))
      ->save();

    parent::submitForm($form, $form_state);
  }

}
