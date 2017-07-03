<?php
/**
 * Template name: Eligiblity Screener.
 * Most of the magic here happens in JavaScript. The only thing we want is a list
 * of program categories.
 */
if ( ! class_exists( 'Timber' ) ) {
  echo 'Timber not activated. Make sure you activate the plugin in <a href="/wp-admin/plugins.php#timber">/wp-admin/plugins.php</a>';
  return;
}

$context = Timber::get_context();

// Get the program categories.
$context['categories'] = get_categories(array(
  'post_type' => 'programs',
  'taxonomy' => 'programs',
  'hide_empty' => false
));

$context['formAction'] = admin_url( 'admin-ajax.php' );

$templates = array( 'screener.twig' );

Timber::render( $templates, $context );