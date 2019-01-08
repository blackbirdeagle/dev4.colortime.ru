function centerElements() {
    var leftN = -$('#slider__action .owl-dots').width() / 2;
    $('#slider__action .owl-dots').css({'margin-left': leftN + 'px'});

    if (document.body.clientWidth <= 991){
        var leftS = -$('.social').width() / 2;
         $('.social').css({'margin-left': leftS + 'px'});
    }
}

centerElements();

$(window).resize(function(){
    centerElements();
});

$('.close__menu').click(function(){
    $('.float__menu').animate({left: -191}, 300);
});

$('.menu_btn').click(function(){
    $('.float__menu').animate({left: 0}, 300);
});

$(function(){
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});

$('[popup-target]').click(function(e) {
    var el = $(this);
    var target = el.attr('popup-target');

    $('.overlay').fadeIn(200, function(){
        $('.popup.'+target).fadeIn(200);
        var top = document.documentElement.clientHeight / 2 - $('.popup.'+target).height() / 2 + $(window).scrollTop();
        var left = $('body').width() / 2 - $('.popup.'+target).width() / 2;
        left = left - 19;
        $('.popup.'+target).css('top', top).css('left', left);
    })

    return false;
});

$('.overlay, .close1').click(function(e) {
    var popup = $('.popup:visible');
    popup.fadeOut(200, function(){
        $('.overlay').fadeOut(200);
    });
    return false;
});

function keyExit(e){
    if(e.keyCode == 27){

        var popup = $('.popup:visible');
        popup.fadeOut(200, function(){
            $('.overlay').fadeOut(200);
        });

    }
}

addEventListener("keydown", keyExit);

jQuery(function(){
    jQuery(".phone").mask("+7(999) 999-9999");
});

$(document).ready(function() {

    $("#slider__circle").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 1
            },
            600: {
                items: 1
            },
            991: {
                items: 1
            }
        },
        margin: 0,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        touchDrag: true,
        dots: false,
        nav: true,
        navText: ['<img src = "images/prev.png" alt = ""/>', '<img src = "images/next.png" alt = ""/>'],
    });

    $("#slider__action").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 1
            },
            600: {
                items: 1
            },
            991: {
                items: 1
            }
        },
        margin: 0,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        touchDrag: true,
        dots: true,
        nav: false,
        navText: ['', ''],
    });

    $("#slider__night").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 1
            },
            600: {
                items: 2
            },
            991: {
                items: 3
            }
        },
        margin: 12,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        touchDrag: true,
        dots: false,
        nav: true,
        navText: ['<img src = "images/prev1.png" alt = ""/>', '<img src = "images/next1.png" alt = ""/>'],
    });

    $("#slider__range").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 2
            },
            600: {
                items: 2
            },
            991: {
                items: 3
            }
        },
        margin: 12,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        touchDrag: true,
        dots: false,
        nav: true,
        navText: ['<img src = "images/prev1.png" alt = ""/>', '<img src = "images/next1.png" alt = ""/>'],
    });


    $("#slider__fantasy").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 1
            },
            600: {
                items: 1
            },
            991: {
                items: 1
            }
        },
        margin: 0,
        loop: false,
        autoplay: false,
        autoplayTimeout: 3000,
        touchDrag: true,
        dots: false,
        nav: true,
        navText: ['<img src = "images/prev.png" alt = ""/>', '<img src = "images/next.png" alt = ""/>'],
    });

    $('.slider__fantasy__pagi__item').click(function(){
        $('.slider__fantasy__pagi__item').removeClass('active');
        $(this).addClass('active');
    });

    $('#pagi_item1').click(function(){
        $("#slider__fantasy").trigger('to.owl.carousel', [0, 300]);
    });

    $('#pagi_item2').click(function(){
        $("#slider__fantasy").trigger('to.owl.carousel', [1, 300]);
    });

    $('#pagi_item3').click(function(){
        $("#slider__fantasy").trigger('to.owl.carousel', [2, 300]);
    });

    $('#pagi_item4').click(function(){
        $("#slider__fantasy").trigger('to.owl.carousel', [3, 300]);
    });

    $('#pagi_item5').click(function(){
        $("#slider__fantasy").trigger('to.owl.carousel', [4, 300]);
    });

    $('#pagi_item6').click(function(){
        $("#slider__fantasy").trigger('to.owl.carousel', [5, 300]);
    });

    $('#pagi_item7').click(function(){
        $("#slider__fantasy").trigger('to.owl.carousel', [6, 300]);
    });

    $('#pagi_item8').click(function(){
        $("#slider__fantasy").trigger('to.owl.carousel', [7, 300]);
    });

    $('#pagi_item9').click(function(){
        $("#slider__fantasy").trigger('to.owl.carousel', [8, 300]);
    });

    $('#pagi_item10').click(function(){
        $("#slider__fantasy").trigger('to.owl.carousel', [9, 300]);
    });

    $("#slider__fantasy").on('dragged.owl.carousel', function(event) {
        var in_owl = event.item.index;
        if (in_owl == 0) {
            $('.slider__fantasy__pagi__item').removeClass('active');
            $('#pagi_item1').addClass('active');
        } else if (in_owl == 1) {
            $('.slider__fantasy__pagi__item').removeClass('active');
            $('#pagi_item2').addClass('active');
        } else if(in_owl == 2){
            $('.slider__fantasy__pagi__item').removeClass('active');
            $('#pagi_item3').addClass('active');
        }else if(in_owl == 3){
            $('.slider__fantasy__pagi__item').removeClass('active');
            $('#pagi_item4').addClass('active');
        }else if(in_owl == 4){
            $('.slider__fantasy__pagi__item').removeClass('active');
            $('#pagi_item5').addClass('active');
        }else if(in_owl == 5){
            $('.slider__fantasy__pagi__item').removeClass('active');
            $('#pagi_item6').addClass('active');
        }else if(in_owl == 6){
            $('.slider__fantasy__pagi__item').removeClass('active');
            $('#pagi_item7').addClass('active');
        }else if(in_owl == 7){
            $('.slider__fantasy__pagi__item').removeClass('active');
            $('#pagi_item8').addClass('active');
        }else if(in_owl == 8){
            $('.slider__fantasy__pagi__item').removeClass('active');
            $('#pagi_item9').addClass('active');
        }else if(in_owl == 9){
            $('.slider__fantasy__pagi__item').removeClass('active');
            $('#pagi_item10').addClass('active');
        }
    });
});