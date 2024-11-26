(function ($) {
    'use strict';

    $(function () {

        var $window = $(window),
            $container = $('#container');

        //아코디언
        var $accordion = $container.find('.accordion');

        $accordion.each(function () {
            var $this = $(this),
                $accordionButton = $this.find('.accordion_button'),
                $accordionBody = $this.find('.accordion_body');

            $accordionButton.on('click', function () {
                var $this = $(this),
                    $parents = $this.parents('.accordion_item'),
                    $thisBody = $parents.find('.accordion_body');

                if ($parents.hasClass('active')) {
                    $this.parents('.accordion_item').removeClass('active')
                    $this.parents('.accordion_item').find('.accordion_body').attr('title', '기여도 숨김');
                    $this.parents('.accordion_item').find('.accordion_header').removeAttr('title');
                    $accordionBody.stop().slideUp(300);

                } else {
                    $this.parents('.accordion_item').addClass('active').siblings().removeClass('active');
                    $this.parents('.accordion_item').find('.accordion_body').attr('title', '기여도 보임');
                    $this.parents('.accordion_item').siblings().find('.accordion_body').attr('title', '기여도 숨김');
                    $this.parents('.accordion_header').attr('title', '프로젝트 선택');
                    $this.parents('.accordion_item').siblings().find('.accordion_header').removeAttr('title');
                    $accordionBody.stop().slideUp(0);
                    $thisBody.stop().slideDown(600);
                }
            });
        });

    });
})(window.jQuery);
