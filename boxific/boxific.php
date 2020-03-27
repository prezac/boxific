<?php
/*
Plugin Name: Boxific
Plugin URI: https://github.com/prezac/boxific/
Description: Boxific allows you to change the design of boxes on your WordPress site. Using the css selector, you can create any number of box rules and apply them to elements on web pages.
Version: 0.1.0
Requires at least: Wordpress 5.3.2
Tested up to: Wordpress 5.3.2
License: GNU General Public License 2.0 (GPL) http://www.gnu.org/licenses/gpl.html
Author: Petr Rezac
Author URI: http://www.pr-software.net/
*/

define( 'BOXIFIC_INCLUDES', 'includes/' );

add_action('admin_init', 'boxific_init');

function boxific_init(){

}

function boxific_print_scripts(){
	wp_enqueue_script( 'boxific', plugins_url('/'.BOXIFIC_INCLUDES.'/boxific.js', __FILE__), array('jquery') );
	wp_enqueue_script( 'jquery.slider', plugins_url('/'.BOXIFIC_INCLUDES.'/slider/js/slider.js', __FILE__), array('jquery') );
	wp_enqueue_script( 'jquery.colorpicker', plugins_url('/'.BOXIFIC_INCLUDES.'/colorpicker/js/colorpicker.js', __FILE__), array('jquery') );
}

function boxific_print_styles(){
	wp_enqueue_style( 'boxific', plugins_url('/'.BOXIFIC_INCLUDES.'/boxific.css', __FILE__) );
	wp_enqueue_style( 'jquery.slider', plugins_url('/'.BOXIFIC_INCLUDES.'/slider/css/slider.css', __FILE__) );
	wp_enqueue_style( 'jquery.colorpicker', plugins_url('/'.BOXIFIC_INCLUDES.'/colorpicker/css/colorpicker.css', __FILE__) );
}

add_action('init', 'boxific_frontend');

function boxific_frontend(){
	load_plugin_textdomain( 'boxific', false, dirname( plugin_basename( __FILE__ ) ) . '/' . BOXIFIC_INCLUDES . 'languages/' );
	$rules = unserialize( get_option('boxific-rules') );
}

add_action('wp_head', 'boxific_js_rules');

function boxific_js_rules(){
	$rules = unserialize( get_option('boxific-rules') );
	$html = '';
	if( !empty($rules) ){
		$html .= '<style type="text/css" media="screen">';
		foreach( $rules as $id => $rule ){
			$shadow = explode(" ", $rule['box_shadow']);
			$border_top = explode(" ", $rule['border_top']);
			$border_right = explode(" ", $rule['border_right']);
			$border_bottom = explode(" ", $rule['border_bottom']);
			$border_left = explode(" ", $rule['border_left']);
			$border_radius = explode(" ", $rule['border_radius']);
			$outline = explode(" ", $rule['outline']);
			$html .= "$rule[selector]{\n";
			$html .= "background-color: #$rule[background_color] !important;\n";
			$html .= "border-top: $border_top[0]px $border_top[1] #$border_top[2] !important;\n";
			$html .= "border-right: $border_right[0]px $border_right[1] #$border_right[2] !important;\n";
			$html .= "border-bottom: $border_bottom[0]px $border_bottom[1] #$border_bottom[2] !important;\n";
			$html .= "border-left: $border_left[0]px $border_left[1] #$border_left[2] !important;\n";
			$html .= "border-radius: $border_radius[0]px $border_radius[1]px $border_radius[2]px $border_radius[3]px !important;\n";
			$html .= "box-shadow: $shadow[0]px $shadow[1]px $shadow[2]px #$shadow[3] !important;\n";
			$html .= "outline: $outline[0]px $outline[1] #$outline[2] !important;\n";
			$html .= "outline-offset: $rule[outline_offset]px !important;\n";
			$html .= "}\n";
		}
		$html .= "</style>";
	}
	echo $html;
}

add_action('admin_menu', 'boxific_menu');

function boxific_menu(){
	$subpage['parent_slug'] = 'themes.php';
	$subpage['page_title'] = __("Boxific", 'boxific');
	$subpage['menu_title'] = __('Boxes', 'boxific');
	$subpage['capability'] = 'manage_options';
	$subpage['menu_slug'] = 'boxific_page';
	$subpage['function'] = 'boxific_page';
	$page = add_submenu_page( $subpage['parent_slug'], $subpage['page_title'], $subpage['menu_title'], $subpage['capability'], $subpage['menu_slug'], $subpage['function']);
	add_action( "admin_print_scripts-$page", 'boxific_print_scripts' );
	add_action( "admin_print_styles-$page", 'boxific_print_styles' );
}

function boxific_page(){
	global $rules, $rule;
	$rules = unserialize( get_option('boxific-rules') );
	include( BOXIFIC_INCLUDES . 'boxific_page.php' );
}

/**
 * Boxific AJAX functionality
 *
 * @author Petr Rezac
 */

add_action('wp_ajax_boxific_add_rule', 'ajax_boxific_add_rule');

function ajax_boxific_add_rule() {
	global $rule;
	$rule = array();
	$rule['id'] = 'fc-' . time();
	$rule['selector'] = __('Enter selector here', 'boxific');
	$rule['background_color'] = 'c0c0c0';
	$rule['border_top_width'] = '0';
	$rule['border_top_style'] = 'none';
	$rule['border_top_color'] = '000000';
	$rule['border_right_width'] = '0';
	$rule['border_right_style'] = 'none';
	$rule['border_right_color'] = '000000';
	$rule['border_bottom_width'] = '0';
	$rule['border_bottom_style'] = 'none';
	$rule['border_bottom_color'] = '000000';
	$rule['border_left_width'] = '0';
	$rule['border_left_style'] = 'none';
	$rule['border_left_color'] = '000000';
	$rule['border_top_left_radius'] = '0';
	$rule['border_top_right_radius'] = '0';
	$rule['border_bottom_right_radius'] = '0';
	$rule['border_bottom_left_radius'] = '0';
	$rule['box_shadow_horizontal'] = '0';
	$rule['box_shadow_vertical'] = '0';
	$rule['box_shadow_blur'] = '0';
	$rule['box_shadow_color'] = '000000';
	$rule['outline_width'] = '0';
	$rule['outline_style'] = 'none';
	$rule['outline_color'] = '000000';
	$rule['outline_offset'] = '0';
	$rule['collapsed'] = false;
	include( BOXIFIC_INCLUDES . 'boxific_rule.php' );
	die();
}

add_action('wp_ajax_boxific_save_all', 'ajax_boxific_save_all');

function ajax_boxific_save_all() {
	$rules = $_POST['rules'];
	update_option( 'boxific-rules', serialize( $rules ) );
	die();
}


add_action('wp_ajax_boxific_delete', 'ajax_boxific_delete');

function ajax_boxific_delete() {
	$rules = unserialize( get_option('boxific-rules') );
	$rule = $_POST['rule'];
	unset($rules[$rule]);
	update_option( 'boxific-rules', serialize( $rules ) );
	die();
}
?>
