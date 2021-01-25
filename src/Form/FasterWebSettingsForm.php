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
    $config = $this->config(static::SETTINGS);

    $form['description'] = [
      '#type' => 'item',
      '#markup' => $this->t('Welcome to the FasterWeb configuration.'),
    ];

    $form['debug_mode'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Debug Mode'),
      '#description' => t('Print messages to console so you can see what FasterWeb is doing.'),
      '#default_value' => $config->get('debug_mode'),
      '#attributes' => array('checked' => 'checked'),
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
      ->save();

    parent::submitForm($form, $form_state);
  }

}
