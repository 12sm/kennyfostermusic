<footer class="content-info container" role="contentinfo">
  <div class="row">
    <div class="col-lg-12">
    
          <div class="row footer-nav">
          	<div class="col-sm-3 col-xs-12">
            	<p class="credits">&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>  |  <a href="http://12southmusic.com/" target="_blank">built by 12SM</a></p>
            </div>
            <div class="col-sm-9 hidden-xs">  
					<?php
                 if (has_nav_menu('footer_navigation')) :
                   wp_nav_menu(array('theme_location' => 'footer_navigation', 'menu_class' => ''));
                 endif;
              ?>
              </div>
              
          </div>
       
          <div id="social" class="row social-nav">
            <div class="col-sm-12">
                  <ul class="social-footer">
                    <li><a href="https://www.facebook.com/KennyFosterOfficial"><i class="fa fa-facebook-square fa-2x"></i></a></li>
                    <li><a href="https://twitter.com/kennyisgo"><i class="fa fa-twitter-square fa-2x"></i></a></li>
                    <li><a href="http://instagram.com/kennyisgo"><i class="fa fa-instagram fa-2x"></i></a></li>
                    <li><a href="http://www.youtube.com/user/KennyFosterOFFICIAL"><i class="fa fa-youtube-square fa-2x"></i></a></li>
                    </ul>
              </div>
            </div>
        

</div>
      
    </div>
  </div>
</footer>

<?php wp_footer(); ?>

  
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
