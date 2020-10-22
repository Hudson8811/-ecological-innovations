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

        // Вопросы!
        $(document).on('click', '.qua-title-block', function(){
            const $this = $(this)
            if(!$this.parent('.qua-block').hasClass('qua-block--active')){
                $('.qua-block').removeClass('qua-block--active')
                $('.qua-content-block').slideUp()
                $this.parent('.qua-block').addClass('qua-block--active')
                $this.siblings('.qua-content-block').slideDown()
            } else{
                $this.parent('.qua-block').removeClass('qua-block--active')
                $this.siblings('.qua-content-block').slideUp()
            }
        })
        // Вопросы!

        // Галерея!
        $('[data-fancybox="gallery"]').fancybox();
        // Галерея!

        // Слайдер ответственность!
        $('.resp-slider').slick({
            prevArrow: '<div class="resp-arrow prev"><svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.236151 6.53947L7.68805 -3.36055e-07L9 1.15132L2.33528 7L9 12.8487L7.68805 14L0.236151 7.46053C-0.0787175 7.16118 -0.0787175 6.81579 0.236151 6.53947Z" fill="white"/></svg></div>',
            nextArrow: '<div class="resp-arrow next"><svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.76385 6.53947L1.31195 -3.36055e-07L-3.9204e-07 1.15132L6.66472 7L-9.03349e-07 12.8487L1.31195 14L8.76385 7.46053C9.07872 7.16118 9.07872 6.81579 8.76385 6.53947Z" fill="white"/></svg></div>',
        })
        // Слайдер ответственность!

        // Поиск!
        $('.header-search-icon').click(function(){
            const $search = $('.header-search-input')
            if(!$search.hasClass('header-search-input--active')){
                $search.addClass('header-search-input--active')
                $search.focus()
            } else{
                $search.removeClass('header-search-input--active')
            }
        })
        // Поиск!

        // Меню!
        $('.header-menu-link').click(function(e){
            const $this = $(this)
            e.preventDefault()
            if(!$this.hasClass('header-menu-link--active')){
                const headerId = $this.data('id')
                $('.header-menu-link').removeClass('header-menu-link--active')
                $this.addClass('header-menu-link--active')
                $('.big_menu').addClass('big_menu--active')
                $('.big_menu-wrap').removeClass('big_menu-wrap--active')
                $(`.big_menu-wrap[data-id="${headerId}"]`).addClass('big_menu-wrap--active')
            } else{
                $this.removeClass('header-menu-link--active')
                $('.big_menu').removeClass('big_menu--active')
            }
        })

        $(document).on('click', '.big_menu-link', function(e){
            e.preventDefault()
            const filterId = $(this).data('filter')
            $('.big_menu-link').removeClass('big_menu-link--active')
            $(this).addClass('big_menu-link--active')
            $('.big_menu-content').removeClass('big_menu-content--active')
            $(`.big_menu-content[data-filter="${filterId}"]`).addClass('big_menu-content--active')
        })
        // Меню!
});

