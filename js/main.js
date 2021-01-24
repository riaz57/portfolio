$(window).on('load',function(){
    $('.loader').fadeOut('slow');
    $('#body_half, #body_half_2').css('height','0');
});

$(function(){
       //home-carousel
    $('.slider_area').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:6000, 
        items:1,
        autoplaySpeed:2000,
        mouseDrag:false
    });
        //mobile-menu
    $('#burger').on('click', function(){
        $(this).toggleClass('active');
        $('#nav_menu').toggleClass('expand');
    });
        //smooth scroll
    smartScroll.init({
        addActive:true,// default true
        activeClass:"active",// default active
        offset: 50,
        speed: 1000
    });
        //navbar-fixed
    var nav_height = $('#navbar.fixed-top').outerHeight();

    $(window).on('scroll', function(){
        if ($('#navbar.fixed-top').offset().top > nav_height) {
            $('#navbar.fixed-top').addClass('animate');
        }else{
            $('#navbar.fixed-top').removeClass('animate');
        }
    });
        //about-carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        nav:false,
        dot:false,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplaySpeed: 1000,
        smartSpeed:1000,
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
    });
        //google map- gmap3
    $('#map')
      .gmap3({
        center:[22.356852, 91.783180],
        zoom:6
      })
      .marker([
        {position:[22.356852, 91.783180]},
        {address:"Chattogram, Bangladesh"},
        {address:"Chattogram, Bangladesh", icon: "https://maps.google.com/mapfiles/marker_grey.png"}
      ])
      .on('click', function (marker) {
        marker.setIcon('https://maps.google.com/mapfiles/marker_green.png');
      });

});