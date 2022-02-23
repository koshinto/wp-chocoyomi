<?php

function add_files() {
  wp_enqueue_style('main',
    get_template_directory_uri() . '/public/style.css'
  );
}
add_action( 'wp_enqueue_scripts', 'add_files');