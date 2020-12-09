<?php
/**
 * @file
 * Contains \Drupal\fasterweb\Controller\HelloController.
 */
namespace Drupal\fasterweb\Controller;
class HelloController {
  public function content() {
    return array(
      '#type' => 'markup',
      '#markup' => t('Hello, World!'),
    );
  }
}