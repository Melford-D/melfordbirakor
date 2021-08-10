(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

// Filter and Overlay
$(document).ready(function(){

$(".filter-b").click(function(){
    var value = $(this).attr('data-filter');
    if(value == "all")
    { 
        $('.filter').show('1000');
    }
    else
    { 
        $(".filter").not('.'+value).hide('3000');
        $('.filter').filter('.'+value).show('3000');
    }
});

if ($(".filter-b").removeClass("active")) {
    $(this).removeClass("active");
}
$(this).addClass("active");
});

// SKILLS
// $(function () {
//     $('.counter').counterUp({
//         delay: 10,
//         time: 2000
//     });

// });
