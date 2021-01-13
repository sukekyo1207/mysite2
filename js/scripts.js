/*!
    * Start Bootstrap - Creative v6.0.3 (https://startbootstrap.com/themes/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
    */
    (function($) {
  "use strict"; // Start of use strict

  $('a[href^="#"]').on('click', function () {
    let speed = 400;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    // position -= $('header').height();
    // // console.log(position,top);
    $('body,html').animate({scrollTop: position}, speed, 'swing');
    return false;
});




$(window).scroll(function (){
  $('.fadein').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight+100){
      $(this).addClass('scrollin');
    }
  });
});

$(window).scroll(function (){
  $('.toright').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight){
      $(this).addClass('scrollin');
    }
  });
});

$(window).scroll(function (){
  $('.fadein2').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight+300){
      $(this).addClass('scrollin');
    }
  });
});

$(window).scroll(function (){
  $('.fade_from_right_to_left').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight){
      $(this).addClass('scrollin');
    }
  });
});

$(window).scroll(function (){
  $('.fadein3').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight){
      $(this).addClass('scrollin');
    }
  });
});

$(window).scroll(function (){
  $('.fade_from_left_to_right').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight+300){
      $(this).addClass('scrollin');
    }
  });
});

$(window).scroll(function (){
  $('.fadein4').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight+150){
      $(this).addClass('scrollin');
    }
  });
});

$(window).scroll(function (){
  $('.fadein4maeda').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight+250){
      $(this).addClass('scrollin');
    }
  });
});



const images = $('#①');
 
let counter = 0;
let index = 0;

$('#next').click(() => {
  images.eq(index).css('display', 'none');
 
  index = ++counter % images.length;
  
  images.eq(index).fadeIn();
})

$('#rev').click(() => {
  images.eq(index).css('display', 'none');
 
  index = --counter % images.length;
  
  images.eq(index).fadeIn();
})



  // Smooth scrolling using jQuery easing
  // $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
  //   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  //     var target = $(this.hash);
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  //     if (target.length) {
  //       $('html, body').animate({
  //         scrollTop: (target.offset().top - 72)
  //       }, 1000, "easeInOutExpo");
  //       return false;
  //     }
  //   }
  // });

  // Closes responsive menu when a scroll trigger link is clicked
  // $('.js-scroll-trigger').click(function() {
  //   $('.navbar-collapse').collapse('hide');
  // });

  // Activate scrollspy to add active class to navbar items on scroll
  // $('body').scrollspy({
  //   target: '#mainNav',
  //   offset: 75
  // });

  $('.slideshow').slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    fade: true,
  });



  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top) {
      $("#mainNav").removeClass("navbar-scrolled");
    } else {
      $("#mainNav").addClass("navbar-scrolled");
    }
  };

  var navbarCollapse = function() {
    if ($("#mainNav").offset().top) {
      $("#mainNav").removeClass("navbar-scrolled");
    } else {
      $("#mainNav").addClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  // navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

// // $(function(){
//     $('.okinawa').click( function() {
//       scroll("#place_sunabe");
//     });
//   // });

  // Magnific popup calls
  // $('#portfolio').magnificPopup({
  //   delegate: 'a',
  //   type: 'image',
  //   tLoading: 'Loading image #%curr%...',
  //   mainClass: 'mfp-img-mobile',
  //   gallery: {
  //     enabled: true,
  //     navigateByImgClick: true,
  //     preload: [0, 1]
  //   },
  //   image: {
  //     tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
  //   }
  // });
  
  // $(function () {
  //   $("#moving").textillate();
  // })



  

})(jQuery); // End of use strict


  

// $(function () {
//   $("#moving").textillate();
// })
