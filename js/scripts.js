$(document).ready(function() {

    $(window).scroll(function(e) {
        if ($(window).scrollTop() > 0) {
            $('.header').addClass('header--scrolling');
        }
        else {
            $('.header').removeClass('header--scrolling');
        }
    });

    $('.header__mobile-button').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.top__content').toggleClass('top__content--opened_mobile_menu');
        $('.header__menu').slideToggle(400);
    });

    $('.header__link').click(function (e) {
        e.preventDefault();
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - $('.header').height();
        $('html, body').animate({ scrollTop: destination }, 600);
    });

    $('body').click(function() {
        if ($(window).width() < 768) {
            $('.top__content').removeClass('top__content--opened_mobile_menu');
            $('.header__menu').slideUp(400);
        }
    });

    $(window).resize(function() {
        if ($(window).width() > 767) {
            $('.top__content').removeClass('top__content--opened_mobile_menu');
            $('.header__menu').attr('style', '');
        }
    });

    // about

    $('.about__slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    // plans

    $('.plan-big__slider').slick({
        dots: false,
        infinite: true,
        speed: 500
    });

    $('.plan-big').slideUp();

    $('.plan-big__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.plan__item--hover').removeClass('plan__item--hover');
        $('.plan__item').eq(nextSlide).addClass('plan__item--hover');
    });

    $('.plan__item').click(function(e) {

        if (!$('.plan-big').hasClass('opened')) {
            $('.plan-big').slideDown(200);
            $('.plan-big').addClass('opened');
        }


        if (!$(this).hasClass('plan__item--hover')) {
            $('.plan__item--hover').removeClass('plan__item--hover');
            $(this).addClass('plan__item--hover');
            $('.plan-big__slider').slick('slickGoTo', parseInt($(this).index()));
        }
    });

    $('.plan-big__back').click(function(e) {
        $('.plan__item--hover').removeClass('plan__item--hover');
        $('.plan-big').removeClass('opened');
        $('.plan-big').slideUp(200);
    });

    // arch

    $('#arch-slider').slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '0px',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });

    // interior

    $('#interior-slider').slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '0px',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });

    // infra

    $('.infra__slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.infra__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.infra__tab--active').removeClass('infra__tab--active');
        $('.infra__tab').eq(nextSlide).addClass('infra__tab--active');
    });

    $('.infra__tab').click(function(e) {
        if (!$(this).hasClass('infra__tab--active')) {
            $('.infra__tab--active').removeClass('infra__tab--active');
            $(this).addClass('infra__tab--active');
            $('.infra__slider').slick('slickGoTo', parseInt($(this).index()));
        }
    });

    // map

    ymaps.ready(init);
    var coords=[55.705104529985,37.548883523411];
    var text='Офис на карте';
    var description='Офис на карте';

    function init(){
        var myMap=new ymaps.Map("map",{
            center:coords,
            zoom:14,
            controls:[]
        });

        var myPlacemark=new ymaps.Placemark(coords,{
            hintContent:text,
            balloonContent:description
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '/img/mark.png',
            // Размеры метки.
            iconImageSize:[60, 55],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            //iconImageOffset:[-25, -110]
        });
        myMap.geoObjects.add(myPlacemark);
    }

    // modal

    $('.open-modal').click(function(e) {
        e.preventDefault();
        const title = $(this).attr('data-title');

        $('.modal__title').text(title);
        $('body').addClass('modal-opened');
        $('.modal').addClass('modal--opened');
    });

    $('.modal').click(function(e) {
        $('.modal--opened').removeClass('modal--opened');
        $('body').removeClass('modal-opened');
    });

    $('.modal__content').click(function(e) {
        e.stopPropagation();
    });
});