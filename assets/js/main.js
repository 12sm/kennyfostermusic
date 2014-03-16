/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can 
 * always reference jQuery with $, even when in .noConflict() mode.
 *
 * Google CDN, Latest jQuery
 * To use the default WordPress version of jQuery, go to lib/config.php and
 * remove or comment out: add_theme_support('jquery-cdn');
 * ======================================================================== */

(function($) {

// Use this variable to set up the common and page specific functions. If you 
// rename this variable, you will also need to rename the namespace below.
var Roots = {
  // All pages
  common: {
    init: function() {
      
      //Code for Bandsintown Refresh
      var windowsize = $(window).width();

      $(window).resize(function() {
	      var windowsize = $(window).width();
	   });
	   
	  $('.vid-wrapper').fitVids();
	  
	  function tix(){ 
		  var tickets= getElementsByTagName('bit-buy-tix')                                        
		  $('tickets').each(function(){
			  $('.bit-buy-tix > Tickets').text("TIX");
			});
	  }; 
      
    }
  },
  // Home page
  home: {
    init: function() {
      // JavaScript to be fired on the home page
      
      $('.flexslider').flexslider({
	    animation: 'slide',
	    animationLoop: true,
	    slideshow: false,
	    pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
	    pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
	    useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
	    touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
	    video: true,  
	    });
      
      //Smooth Scroll
      $(function() {
	      $('a[href*=#]:not([href=#])').click(function() {
		      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			      var target = $(this.hash);
			      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			      if (target.length) {
				      $('html,body').animate({
					      scrollTop: target.offset().top
					   }, 1000);
					   return false;
				}
			}
		   });
		});
		// End Smooth Scroll
		
    //Begin Parallax
	var $window = $(window);
	var $firstBG = $('.music-body');
	var $secondBG = $('.tour-body');
	var $thirdBG = $('.blog-home-body');
	var $fourthBG = $('.gallery-home-body');
	var $fifthBG = $('.store-body');
	
	var windowHeight = $window.height(); //get the height of the window
		
	//apply the class "inview" to a section that is in the viewport
	$('.music-body, .tour-body, .blog-home-body, .gallery-home.body, .store-body').bind('inview', function (event, visible) {
			if (visible == true) {
			$(this).addClass("inview");
			} else {
			$(this).removeClass("inview");
			}
		});
	
	//function that is called for every pixel the user scrolls. Determines the position of the background
	/*arguments: 
		x = horizontal position of background
		windowHeight = height of the viewport
		pos = position of the scrollbar
		adjuster = adjust the position of the background
		inertia = how fast the background moves in relation to scrolling
	*/
	function newPos(x, windowHeight, pos, adjuster, inertia){
		return x + "% " + (-((windowHeight + pos) - adjuster) * inertia)  + "px";
	}
	
	//function to be called whenever the window is scrolled or resized
	function Move(){ 
		var pos = $window.scrollTop(); //position of the scrollbar


		//if the first section is in view...
		if($firstBG.hasClass("inview")){
			//call the newPos function and change the background position
			$firstBG.css({'backgroundPosition': newPos(20, windowHeight, pos, -1000, -0.5)}); 
		}
		
		//if the second section is in view...
		if($secondBG.hasClass("inview")){
			//call the newPos function and change the background position
			$secondBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 100, -0.5)});
		}
		
		//if the third section is in view...
		if($thirdBG.hasClass("inview")){
			//call the newPos function and change the background position
			$thirdBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 800, -0.5)});
		}
		
		//if the fourth section is in view...
		if($fourthBG.hasClass("inview")){
			//call the newPos function and change the background position
			$fourthBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 1600, -0.5)});		
		}
		
		//if the fifth section is in view...
		if($fifthBG.hasClass("inview")){
			//call the newPos function and change the background position
			$fifthBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 1900, -0.5)});
		}
		
	}
			
	$window.resize(function(){ //if the user resizes the window...
		Move(); //move the background images in relation to the movement of the scrollbar
	});		
	
	$window.bind('scroll', function(){ //when the user is scrolling...
		Move(); //move the background images in relation to the movement of the scrollbar
	});
	// End Parallax
	
      
    }
  },
//Video page
  video: {
    init: function() {
      $("#owl-carousel").owlCarousel({
       itemsCustom : [
       [0, 2],
       [480, 3],
       [768, 4],
       [1200, 4],
       [1600, 4]
       ],
       navigation : true,
       navigationText: ['<i class="fa fa-arrow-circle-left"></i>','<i class="fa fa-arrow-circle-right"></i>'],
       pagination: false,
       scrollPerPage : true
      });
  }
},

  // About page
  about: {
    init: function() {
      // JS here
    }
  },

  category_blog: {
    init: function() {
    var $container = $('.blog-posts-internal');
    // initialize
    $container.masonry({
      itemSelector: '.blog-post-individual-internal'
      });
    }
  },
  photos: {
	init: function() {
	
	$('.insta-grid').embedagram({
       	instagram_id: 208622569,
       	thumb_width: 306,
       	limit: 20
      });	
	
	}  
  }
};

// The routing fires all common scripts, followed by the page specific scripts.
// Add additional events for more control over timing e.g. a finalize event
var UTIL = {
  fire: function(func, funcname, args) {
    var namespace = Roots;
    funcname = (funcname === undefined) ? 'init' : funcname;
    if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
      namespace[func][funcname](args);
    }
  },
  loadEvents: function() {
    UTIL.fire('common');

    $.each(document.body.className.replace(/-/g, '_').split(/\s+/),function(i,classnm) {
      UTIL.fire(classnm);
    });
  }
};

$(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.  