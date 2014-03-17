<h1>Official Photos</h1>
<?php while (have_posts()) : the_post(); ?>
  <?php the_content(); ?>
  <?php wp_link_pages(array('before' => '<nav class="pagination">', 'after' => '</nav>')); ?>
<?php endwhile; ?>

<h1>Instagram</h1>
<ul class="insta-grid"></ul>
