
$("close").click(function(){

$("button.rd-navbar-toggle").removeClass("active");
});
$(".close").click(function (){
// $('#slidePanel').toggle( "slide",{direction: 'right'});
if($('.rd-navbar-nav-wrap').hasClass('active')){
$('.rd-navbar-nav-wrap').removeClass('active');
}
else{
$('#btnDiv').addClass('rotated');
}
});


$(".close").click(function (){
// $('#slidePanel').toggle( "slide",{direction: 'right'});
if($('.rd-navbar-toggle').hasClass('active')){
$('.rd-navbar-toggle').removeClass('active');
}
else{
$('#btnDiv').addClass('rotated');
}
});

(function ($) {
    var o = $('.rd-navbar');
    if (o.length > 0) {
       // include('../dist/js/jquery.rd-navbar.js');

        $(document).ready(function () {
            o.RDNavbar({
                stickUpClone: false,
                stickUpOffset: 63
            });
        });
    }
})(jQuery);




    // jQuery(function ($) {
     
    //   // start all the timers
    //   $('.timer').each(count);
      
    //   // restart a timer when a button is clicked
    //   $( window ).scroll(function () {console.log($(window).scrollTop());
    // if($(window).scrollTop() > 300 && $(window).scrollTop() < 850)
    // {
    //    $('.timer').each(count);
    //  }
    //   });
      
    //   function count(options) {
    //     var $this = $(this);
    //     options = $.extend({}, options || {}, $this.data('countToOptions') || {});
    //     $this.countTo(options);
    //   }
    // });



// jQuery(document).ready(function($){
//     var offset = $( "header" ).offset();
//     checkOffset();

//     $(window).scroll(function() {
//         checkOffset();
//     });

//     function checkOffset() {
//         if ( $(document).scrollTop() > offset.top){
//             $('header').addClass('fixed');
//         } else {
//             $('header').removeClass('fixed');
//         } 
//     }

// });







$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 60) {
        $(".page-scroll-indicator").addClass("fixed");
    } else {
        $(".page-scroll-indicator").removeClass("fixed");
    }
});






// $(document).ready(function(){
//   var owl = $('.banner-slide');
//   owl.owlCarousel({
//     loop:true,
//     animateOut: 'fadeOut',
//     margin:10,
//     nav:false,
//     items: 1,
//     smartSpeed:450
//   });
  
//   // Custom Button
//   $('.customNextBtn').click(function() {
//     owl.trigger('next.owl.carousel');
//   });
//   $('.customPreviousBtn').click(function() {
//     owl.trigger('prev.owl.carousel');
//   });
  
// });





$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye-slash fa-eye");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});


$('.testmons').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
         navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.nw-media').owlCarousel({
    loop:true,
    margin:5,
    nav:true,
    dots:false,
         navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],

    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

AOS.init({disable: 'mobile'});


// var rellax = new Rellax('.rellax');


// $('.fetOne').owlCarousel({
//     center: false,
//     items:2,
//     loop:true,
//         navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
//     margin:10,
//      nav:true,
//     dots:false,
//     responsive:{
//         600:{
//             items:4
//         }
//     }
// });



$('.fetOne').owlCarousel({
    loop:true,
    margin:4,
    nav:true,
    dots:false,
         navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],

    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})



$('.banner-slide').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
  navContainer: '.banner .custom-nav',
        slideBy: 1,
        items: 1,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})





// $(document).ready(function () {
//   var mainOwl = $('.owl-carousel.banner-slide');
//     mainOwl.owlCarousel({
//         autoplay: true,
//         smartSpeed: 800,
//         loop: true,
//         nav: true,
      
//         dots: true,
//         mouseDrag: true,
//         margin: 10,
//        navText: [
//         '<i class="fa fa-angle-left" aria-hidden="true"></i>',
//         '<i class="fa fa-angle-right" aria-hidden="true"></i>'
//     ],
//     navContainer: '.banner .custom-nav',
//         slideBy: 1,
//         items: 1,
//     });

//     // tween for Main Slider Owl change 
//     mainOwl.on('changed.owl.carousel', function (e) {
//         var scrollController = new ScrollMagic.Controller();

//         $(".owl-carousel.banner-slide #first-p").each(function () {
//             var fadeUpScene = new ScrollMagic.Scene({
//                 triggerElement: this,
//                 triggerHook: 1
//             })
//                 .setTween(TweenMax.from(this, 1, { scale: 0, ease: Power1.easeIn, delay: 1 }))
//                 .addTo(scrollController)
//         })
//         $(".owl-carousel.banner-slide .slide1 img").each(function () {
//             var fadeUpScene = new ScrollMagic.Scene({
//                 triggerElement: this,
//                 triggerHook: 1
//             })
//                 .setTween(TweenMax.from(this, 1, { x: 50, opacity: 0, ease: Power1.easeOut, delay: 0.5 }))
//                 .addTo(scrollController)
//         })

//     });

// });

Splitting();
ScrollOut({
   targets: '[data-splitting]'
});

/*------------------------------------*\
    ::Scrolling Sections
\*------------------------------------*/
var scrollingSections = function(){
    var $window = $(window);
    window.resizeScrollingSection = null;
    // checking desktop width
    var ifAbove800 = function(){
        // if we're at desktop
        if($window.width() > 800){
            animateSections();
        // if we're not at desktop
        }else{
            $('.method__wrap').removeClass('sticky');
            $(window).unbind('scroll');
        }
    };
    var animateSections = function() {
        var fourthMethodHeight = $('.method').height() / 4;
        var methodTop = $('.method__inner').offset().top;
        var $parent = $('.method__wrap');
        var $single = $('.method__single');
        
        var $single1 = $('.method__single--1');
        var $single2 = $('.method__single--2');
        var $single3 = $('.method__single--3');
        var $single4 = $('.method__single--4');
      
        $(window).scroll(function(event){
            if ($(window).scrollTop() > methodTop) {
                $parent.addClass('sticky');
                $single.removeClass('fade-in');
                $single1.addClass('fade-in');
            }else{
                $parent.removeClass('sticky');
            }
            if($(window).scrollTop() > (methodTop + fourthMethodHeight)){
                $single.removeClass('fade-in');
                $single2.addClass('fade-in');
            }
            if($(window).scrollTop() > (methodTop + (fourthMethodHeight * 2) )){
                $single.removeClass('fade-in');
                $single3.addClass('fade-in');
            }
            if($(window).scrollTop() > (methodTop + (fourthMethodHeight * 3) )){
                $single.removeClass('fade-in');
                $single4.addClass('fade-in');
            }
           if($(window).scrollTop() > (methodTop + (fourthMethodHeight * 4) )){
                $single.removeClass('fade-in');
                $parent.removeClass('sticky');
                $single5.addClass('fade-in');
            }
            // console.log($('.method__wrap').offset());
            // console.log($(window).scrollTop());
            // console.log(methodTop + $('.method').height());
        });

    };
    ifAbove800();
    // on resize, call that same function
    $window.on('resize', function(){
        clearTimeout(resizeScrollingSection);
        window.resizeScrollingSection = setTimeout(ifAbove800, 10);
    });

};

jQuery(function($){
    scrollingSections();
});


// (function ($) {
//     $('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(function() {
//         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//             var target = $(this.hash);
//             target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//             if (target.length) {
//                 $('html,body').animate({
//                     scrollTop: target.offset().top
//                 }, 1000);
//                 return false;
//             }
//         }
//     });


// })(jQuery);


$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });