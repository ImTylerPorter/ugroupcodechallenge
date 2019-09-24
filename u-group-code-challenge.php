<?php
/**
 * Plugin Name: U Group Code Challenge
 * Plugin URI: https://u.group
 * Description: Easily add a project block
 * Version: 1.0
 * Author: Tyler Porter
 * Author URI: https://cleverladder.co
 *
 */
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) exit;

function uGroupChallengeAssets(){
	$url = untrailingslashit( plugin_dir_url( __FILE__ ) );

    // Scripts.
    wp_enqueue_script(
        'uGroup-custom-block-js', // Handle.
        $url . '/build/index.js',
        array( 'wp-blocks', 'wp-i18n', 'wp-editor' )
    );
    // Styles.
    wp_enqueue_style(
        'uGroup-custom-block-editor-css', // Handle.
        $url . '/build/editor.css',
        array( 'wp-edit-blocks' )
    );
} // End function uGroupChallengeAssets().

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'uGroupChallengeAssets' );

function uGroup_block_assets(){
	$url = untrailingslashit( plugin_dir_url( __FILE__ ) );

	wp_enqueue_style(
        'uGroup-custom-block-frontend-css', // Handle.
        $url . '/build/style.css'
    );
}
// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'uGroup_block_assets' );