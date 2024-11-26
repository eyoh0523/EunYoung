(function ($) {
    'use strict';

    $(function () {

        var $window = $(window),
            $html = $('html'),
            $container = $('#container'),
            $footer = $('#footer');

        /* visual */
        $window.on('load',function (){
            $visual.addClass('on');
        });

        var $visual = $('.visual'),
            $visualList = $visual.find('.visual_list'),
            $visualDots = $visual.find('.visual_dots');

        $visualList.slick({
            autoplay : true,
            fade : true,
            speed : 1500,
            autoplaySpeed : 4500,
            swipe : true,
            draggable: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite : true,
            prevArrow: $('.visual .visual_control .visual_prev'),
            nextArrow: $('.visual .visual_control .visual_next'),
            pauseOnHover: false,
            dots: true,
            appendDots : $visualDots,
            customPaging: function (slider, i) {
                var title = $(slider.$slides[i]).data('title'),
                    index = $(slider.$slides[i]).data('index');
                return '<button type="button" class="dots_title">' + '<em>' + index  + '</em>' + '<span>' + title + '<span>' +' </button>';
            },
        });


        /* 공연안내 */
        var $performance = $container.find('.performance'),
            $performanceList = $performance.find('.performance_list'),
            $performancePrev = $performance.find('.performance_prev'),
            $performanceNext = $performance.find('.performance_next');

        $performanceList.slick({
            autoplay : false,
            draggable : true,
            infinite : true,
            slidesToShow : 4,
            variableWidth : true,
            prevArrow : $performancePrev,
            nextArrow : $performanceNext,
            responsive: [
                {
                    breakpoint: 1501,
                    settings: {
                        slidesToShow : 3,
                    }
                },
            ]
        });

        /* 일정안내 */
        var $schedule = $container.find('.schedule'),
            $scheduleButton = $schedule.find('.calendar_table td .day'),
            $scheduleClose = $schedule.find('.calendar_table .schedule_layer .schedule_close');

        $scheduleButton.on('click', function () {
            var $this = $(this);
            $this.parent().addClass('active');
            $this.parent().siblings().removeClass('active');
            $this.parent().parents().siblings().children().removeClass('active');
        });

        $scheduleClose.on('click', function (){
            $(this).parents().removeClass('active');
        })

        $('.calendar_table tbody td').each( function (){
            if($(this).children().is('.schedule_layer') === true){
                $(this).children('button').addClass('schedule_open').attr('title','일정보기')
            }
        });



        //팝업
        var $Popup = $('.popup .popup_list');

        $Popup.slick({
            //기본
            autoplay: true,
            dots: false,
            swipe: true,
            draggable: true,
            slidesToShow: 1,
            variableWidth: false,
            infinite: true,
            prevArrow: $('.popup .popup_control .prev'),
            nextArrow: $('.popup .popup_control .next'),

            responsive: [
                {
                    breakpoint: 641,
                    settings: {
                        autoplay: false,
                        variableWidth: false,
                        infinite: true,
                        slidesToShow: 1,
                    }
                },
            ],
        });


        //팝업 끝



        //관련사이트
        var $footerSite = $footer.find('.site'),
            $siteList = $footerSite.find('.site_list'),
            $siteBtn = $footerSite.find('.site_button');

        $siteBtn.on('click',function(){
            if ($footerSite.hasClass('active')){
                $siteList.height(0);
                $footerSite.removeClass('active');
                setTimeout(function(){
                    $siteList.removeAttr('style');
                },500)
                $(this).attr('title','목록 열기');
            }else{
                var height = $siteList.height();
                $footerSite.addClass('active');
                $siteList.height(0).height(height);
                $(this).attr('title','목록 닫기');
            };
        });

        // 맨위로

        var $toTop = $footer.find('.toTop'),
            $toTopBtn = $toTop.find('button'),
            toTopOffset;

        $window.on('load resize',function(){
            $toTop.removeAttr('style');
            toTopOffset = $toTop.offset();
            $window.on('resize scroll',function(){
                toTopPosition($toTop, toTopOffset);
            });
        });

        function toTopPosition(quick, toTopOffset){
            if(window.scrollY > $('#header').height()){
                $toTop.addClass('active');
                if(window.scrollY + window.innerHeight >= $('#wrapper').height() - 200) return $toTop.removeAttr('style');
                $toTop.css({
                    'position':'fixed',
                    'top':'auto',
                    'bottom':'40px',
                });
            }else{
                $toTop.removeClass('active');
            };
        };

        $toTopBtn.on('click',function(){
            window.scroll({top:0,left:0,behavior: "smooth",});
        });


    });
})(window.jQuery);

