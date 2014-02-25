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

?>