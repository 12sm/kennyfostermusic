<?php

function music_player($atts) {
   extract(shortcode_atts(array(
    'width' => '100%',
    'height' => '50',
   	'album' => '',
   	'track' => '',
   	'size' => 'small',
   	'bgcol' => 'ffffff',
   	'linkcol' => '0687f5',
   ), $atts));
return '<iframe width="300" height="50" style="position: relative; display: block; width: 300px; height: 50px; background:transparent; float:left;" src="http://bandcamp.com/EmbeddedPlayer/v=2/album=' .$album. '/track=' .$track. '/transparent=true/layout=http_3A_2F_2Fdemo.samnabi.com_2Fbcembed5_2Fjsontxt_2Fkennyfoster-2014-02-25-123427.txt/bgcol=ffffff/linkcol=ffffff/debug=true/" allowtransparency="true" frameborder="0"></iframe>';
}

add_shortcode('bandcamp', 'music_player');

define( 'UPLOADS', ''.'assets' );

function bread_crumbs ($atts) {

   extract(shortcode_atts(array(
    'width' => '100%',
   ), $atts));
return yoast_breadcrumb('<div class="breadcrumbs">','</div>');
}

add_shortcode('breadcrumbs', 'bread_crumbs');


add_action( 'plugins_loaded', 'my_cleanup', 12 ); // after they are registered
function my_cleanup() {
if ( !is_admin() ) {
global $WP_Views;
remove_action('wp_print_styles', array($WP_Views, 'add_render_css'));
remove_action('wp_head', 'wpv_add_front_end_js');
remove_action('wp_footer', 'wpcf_access_dependencies_render_js');
wp_dequeue_style( 'views-pagination-style' );
wp_dequeue_script( 'views-pagination-script' );
wp_dequeue_script( 'wpv-date-front-end-script' );
wp_dequeue_script( 'jquery-ui-datepicker' );
wp_dequeue_script( 'jquery-ui-core' );
wp_dequeue_style( 'jquery-ui-datepicker' );
}
}

?>