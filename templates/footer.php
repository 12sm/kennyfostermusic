<footer class="content-info container" role="contentinfo">
  <div class="row">
    <div class="col-lg-12">
      <!--<div class="row sidebar-footer">
      	<?php dynamic_sidebar('sidebar-footer'); ?>
    </div>-->
    <div class="row footer-nav">  
        <?php
     if (has_nav_menu('footer_navigation')) :
       wp_nav_menu(array('theme_location' => 'footer_navigation', 'menu_class' => ''));
     endif;
  ?>
    </div>
    <div class="row">
      <div class="col-sm-6">
      </div>
      <div class="col-sm-6">     
        <div id="social" class="row social-nav">
          <ul class="social-footer">
              <li><a href="https://www.facebook.com/KennyFosterOfficial"><i class="fa fa-facebook-square fa-2x"></i></a></li>
              <li><a href="https://twitter.com/kennyisgo"><i class="fa fa-twitter-square fa-2x"></i></a></li>
              <li><a href="http://instagram.com/kennyisgo"><i class="fa fa-instagram fa-2x"></i></a></li>
              <li><a href="http://www.youtube.com/user/KennyFosterOFFICIAL"><i class="fa fa-youtube-square fa-2x"></i></a></li>
          </ul>
      </div>
    </div>
  </div>
  <?php
     if (has_nav_menu('social_navigation')) :
       wp_nav_menu(array('theme_location' => 'social_navigation', 'menu_class' => ''));
     endif;
  ?>
  </div>
      <p class="credits">&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>  |  <a href="http://12southmusic.com/" target="_blank">built by 12SM</a></p>
    </div>
  </div>
</footer>

<?php wp_footer(); ?>

<!-- Begin 12SM Network Analytics <!-->   
  <script type="text/javascript">
	var _gaq = _gaq || [];
  	_gaq.push(['_setAccount', 'UA-27814560-3']);
  	_gaq.push(['_setDomainName', '12southmusic.com']);
  	_gaq.push(['_setAllowLinker', true]);
  	_gaq.push(['_trackPageview']);
 	(function() {
	  	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	  	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	  	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  	})();
	</script>
  <!-- End 12SM Network Analytics <!--> 