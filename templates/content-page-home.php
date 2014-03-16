<div class="row home-slider"><?php echo do_shortcode( '[layerslider id="2"]'); ?></div>

<?php
echo do_shortcode('[wpv-view name="About Home"]');
echo do_shortcode('[wpv-view name="Video Home"]');
echo do_shortcode('[wpv-view name="Tour Home"]');
echo do_shortcode('[wpv-view name="Blog Home"]');
echo do_shortcode('[wpv-view name="Store Banner"]');

?>
<?php while (have_posts()) : the_post(); ?>
  <?php the_content(); ?>
  <?php wp_link_pages(array('before' => '<nav class="pagination">', 'after' => '</nav>')); ?>
<?php endwhile; ?>