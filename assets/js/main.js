// Modified http://paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/
// Only fires on body class (working off strictly WordPress body_class)

var ExampleSite = {
  // All pages
  common: {
    init: function() {

      //Code for Bandsintown Refresh
      var windowsize = $(window).width();

      $(window).resize(function() {
	      var windowsize = $(window).width();
	   });

      
    },
    finalize: function() { }
  },
  // Home page
  home: {
    init: function() {
      // JS here
      
    }
  },
//Video page
  video: {
    init: function() {
      console.log("I'm firing fro the video section")
  var owl = $("#owl-carousel");
     owl.owlCarousel({
       itemsCustom : [
       [0, 2],
       [480, 3],
       [768, 4],
       [1200, 5],
       [1600, 6]
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

  blog: {
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
}

var UTIL = {
  fire: function(func, funcname, args) {
    var namespace = ExampleSite;
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

    UTIL.fire('common', 'finalize');
  }
};


$(document).ready(UTIL.loadEvents);


$(document).ready(function(){
	$('.vid-wrapper').fitVids();
});

function tix(){ 
  console.log("load is working")
var tickets= getElementsByTagName('bit-buy-tix')                                        
    $('tickets').each(function(){
      console.log(".tickets are being recognized")
        $('.bit-buy-tix > Tickets').text("TIX");
    });
};     




$(window).load(function() {
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
  });
  
  
 $(window).scroll(function(e){
		    parallax();
		 });
		 function parallax(){
		    var scrolled = $(window).scrollTop();
		    //$('.about-view').css('background-position-y',(scrolled*0.08-50)+'px');
		    //$('.tour').css('background-position-y',(scrolled*0.08-300)+'px');
	    }      