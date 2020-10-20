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

    if($('body').hasClass('index-page')){
        bannerVideoPositionSet('.banner-video')
        $(window).resize(function(){
            bannerVideoPositionSet('.banner-video')
        })
    }
    
    
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
    
    if($('body').hasClass('index-page')){
        aboutBgPositionSet()
        $(window).resize(function(){
            aboutBgPositionSet()
        })
    }
    

    function aboutLinePositionSet(aboutLinePositionItem){
        const btnOffset = $('.banner-tools-btns-next--js').offset().left
        $(aboutLinePositionItem).css({
            width: `calc(${btnOffset}px - 152px)`,
        })
    }

    if($('body').hasClass('index-page')){
        aboutLinePositionSet('.about_us-line2')
        aboutLinePositionSet('.about_us-line3')
        $(window).resize(function(){
            aboutLinePositionSet('.about_us-line2')
            aboutLinePositionSet('.about_us-line3')
        })
    }

    // Бг about_us!

    // Каталог отзывов!
    $('.reviews-slider').slick({
        infinite: true,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:false,
        dots: true,
    });
    // Каталог отзывов!

     // Новости!
     $('.news').slick({
        infinite: false,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false,
        dots: false,
    });
    // Новости!

    // Sidebar!
    $('.sidebar-link').click(function(e){
        e.preventDefault()
        const $this = $(this)
        if(!$this.hasClass('sidebar-link--active')){
            $('.sidebar-link').removeClass('sidebar-link--active')
            $('.category').slideUp()
            $this.addClass('sidebar-link--active')
            $this.siblings('.category').slideDown()
        } else{
            $this.removeClass('sidebar-link--active')
            $this.siblings('.category').slideUp()
        }
    })

    $('.category-link').click(function(e){
        e.preventDefault()
        const $this = $(this)
        if(!$this.hasClass('category-link--active')){
            $('.category-link').removeClass('category-link--active')
            $('.sub_category').slideUp()
            $this.addClass('category-link--active')
            $this.siblings('.sub_category').slideDown()
        } else{
            $this.removeClass('category-link--active')
            $this.siblings('.sub_category').slideUp()
        }
    })
    // Sidebar!

    // Слайдер отчетов!
    $('.reports-slider').slick({
        infinite: false,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows:false,
        dots: false,
    });
    // Слайдер отчетов!

        // Тулзы слайдера отчетов!
        $('.reports .reports-arrow-next').click(function(e){
            e.preventDefault()
            $('.reports-slider').slick("slickNext")
        })
    
        $('.reports .reports-arrow-prev').click(function(e){
            e.preventDefault()
            $('.reports-slider').slick("slickPrev")
        })

        const lengthReportsSlides =$('.reports .reports-item').length / 4
        $('.reports .reports-pag-count_all').text(lengthReportsSlides)
        $('.reports-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            let reportsSlidePosition =  Math.ceil((nextSlide + 3) / 4)
            $('.reports  .reports-pag-count').text(reportsSlidePosition)
          });
        // Тулзы слайдера отчетов!
    
        // Видео!
        $(document).on('click', '.reports-play', function(e){
            e.preventDefault()
            const $this = $(this)
            let src = $this.parent('.reports-placeholder').siblings('.reports-video').attr('src')
            $this.parent('.reports-placeholder').addClass('reports-placeholder--hidden')
            $this.parent('.reports-placeholder').siblings('.reports-video').attr('src', `${src}?autoplay=1`)
            
        })
        // Видео!

        // Форма!
        $('.form-input').focus(function(){
            $(this).parent('.form-label').addClass('form-label--active')
        })

        $('.form-input').blur(function(){
            if($(this).val() == ""){
                $(this).parent('.form-label').removeClass('form-label--active')
            }
        })
        // Форма!

        // Scope слайдер!
        $('.scope-slider').slick({
            infinite: false,
            autoplay: false,
            rows:2,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows:false,
            dots: false,
        });

        $('.scope .reports-arrow-next').click(function(e){
            e.preventDefault()
            $('.scope-slider').slick("slickNext")
        })
    
        $('.scope .reports-arrow-prev').click(function(e){
            e.preventDefault()
            $('.scope-slider').slick("slickPrev")
        })

        const lengthScopeSlides =$('.scope .scope-item').length / 4
        $('.scope .reports-pag-count_all').text(lengthScopeSlides)
        $('.scope-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            let scopeSlidePosition =  Math.ceil((nextSlide + 2) / 2)
            $('.scope .reports-pag-count').text(scopeSlidePosition)
            console.log(nextSlide)
        });
        // Scope слайдер!

        // Табы!
        $('.tabs-title').click(function(e){
            const $this = $(this)
            const tabId = $this.data('id')
            e.preventDefault()
            $('.tabs-title').removeClass('tabs-title--active')
            $this.addClass('tabs-title--active')
            $('.tabs-content-block').removeClass('tabs-content-block--active')
            $(`.tabs-content-block[data-id="${tabId}"]`).addClass('tabs-content-block--active')
        })
        // Табы!

        // Селект!
        $('.form-input-select').click(function(){
           $(this).parent('.form-label').addClass('form-label-select--active form-label--active')
        })

        $('.form-input-select-content-item').click(function(){
            const $this = $(this)
            const selectValue = $this.text()
            $this.parent('.form-input-select-content').siblings('.form-input-select').text(selectValue)
            $this.parents('.form-label').removeClass('form-label-select--active')
        })
        // Селект!
});
