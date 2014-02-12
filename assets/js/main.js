// Modified http://paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/
// Only fires on body class (working off strictly WordPress body_class)

var ExampleSite = {
  // All pages
  common: {
    init: function() {
      // JS here
    },
    finalize: function() { }
  },
  // Home page
  home: {
    init: function() {
      // JS here
    }
  },
  // About page
  about: {
    init: function() {
      // JS here
    }
  }
};

//Code for Bandsintown Refresh
var windowsize = $(window).width();

$(window).resize(function() {
  var windowsize = $(window).width();
});


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
$(document).ready(function(){
$('.vid-wrapper').fitVids();
});

$(document).ready(UTIL.loadEvents);


function tix(){ 
  console.log("load is working")
var tickets= getElementsByTagName('bit-buy-tix')                                        
    $('tickets').each(function(){
      console.log(".tickets are being recognized")
        $('.bit-buy-tix > Tickets').text("TIX");
    });
};     