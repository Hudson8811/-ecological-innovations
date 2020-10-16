$(document).ready(function () {
    // Инициализация слайдера баннера!
    $('.banner-slider').slick({
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots: false,
    });
    // Инициализация слайдера баннера!

    // Бг баннера!
    function bannerVideoPositionSet(itemSetPosition){
        const btnOffset = $('.banner-tools-btns-next--js').offset().left
        $(itemSetPosition).css({
            width: `calc(100vw - ${btnOffset}px)`,
        })
    }
    
    bannerVideoPositionSet('.banner-video')
    $(window).resize(function(){
        bannerVideoPositionSet('.banner-video')
    })
    // Бг баннера!

    // Тулзы баннера!
    $('.banner-tools-btns-next--js').click(function(e){
        e.preventDefault()
        $('.banner-slider').slick("slickNext")
    })

    $('.banner-tools-btns-prev--js').click(function(e){
        e.preventDefault()
        $('.banner-slider').slick("slickPrev")
    })

    $('.banner-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.banner-tools-pags-count--js').text(`0${nextSlide+1}`)
      });
    // Тулзы баннера!

    // Бг about_us!
    function aboutBgPositionSet(){
        const btnOffset = $('.banner-tools-btns-next--js').offset().left
        $('.about_us-bg').css({
            width: `${btnOffset}px`,
        })
    }
        
    aboutBgPositionSet()
    $(window).resize(function(){
        aboutBgPositionSet()
    })

    function aboutLinePositionSet(aboutLinePositionItem){
        const btnOffset = $('.banner-tools-btns-next--js').offset().left
        $(aboutLinePositionItem).css({
            width: `calc(${btnOffset}px - 152px)`,
        })
    }

    aboutLinePositionSet('.about_us-line2')
    aboutLinePositionSet('.about_us-line3')
    $(window).resize(function(){
        aboutLinePositionSet('.about_us-line2')
        aboutLinePositionSet('.about_us-line3')
    })
    // Бг about_us!


});
