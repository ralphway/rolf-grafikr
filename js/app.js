$(document).foundation();

$(window).on('load', function() {
      
    if (is_touch_device()) {
        $('body').addClass('is-touch');
    }

    $('.brands').slick({
        dots: true,
        arrows: true,
        centerMode: true,
        draggable: false,
        touchMove: true,
        focusOnSelect: true,
        prevArrow: '<div class="slick-prev slick-arrow"><</div>',
        nextArrow: '<div class="slick-next slick-arrow">></div>'
    
    });
    $(".mobile-controls").on('click', function() {
        $('.colleagues ul li').removeClass("hover");
        $('.colleagues ul li').removeClass("dim-down");
        $(".mobile-controls").removeClass('active');
    });
    $(".colleagues ul li span").hover(function() {
        $(this).parent().addClass("hover");
        $(".mobile-controls").addClass('active');
    }, function() {
        $(this).parent().removeClass("hover");
        $(".mobile-controls").removeClass('active');
    });
    $(".colleagues ul li").hover(function() {
        $(this).siblings("li").addClass("dim-down");
    }, function() {
        $(this).siblings("li").removeClass("dim-down");
    });    
});

function is_touch_device() {
    return 'ontouchstart' in window        // works on most browsers 
    || 'onmsgesturechange' in window;  // works on IE10 with some false positives
};