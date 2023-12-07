(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });



  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);






  /*-------------------------------------------*/


    console.clear();

    var app = function () {
        var body = undefined;
        var menu = undefined;
        var menuItems = undefined;

        var init = function init() {
            body = document.querySelector("body");
            menu = document.querySelector(".menu-icon");
            menuItems = document.querySelectorAll(".nav__list-item");

            applyListeners();
        };

        var applyListeners = function applyListeners() {
            menu.addEventListener("click", function () {
                return toggleClass(body, "nav-active");
            });
        };

        var toggleClass = function toggleClass(element, stringClass) {
            if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
        };

        init();
    }();








})(jQuery); // End of use strict



// ------------------------  Mouse Move Gradient   ------------------------  //
/*
(function($){
    $(document).mousemove(
        function(e){
            var X = e.pageX;
            var Y = e.pageY;
            $('body').css('background','radial-gradient(circle at '+X+'px '+Y+'px, rgba(170,230,240,1), rgba(15,180,220,1))')
        }
    );
})(jQuery);
*/

// ------------------------  Mouse Move Gradient   ------------------------  //
