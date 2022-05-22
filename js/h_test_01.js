$(function(){
//------------------------------------------------------------------
    /*슬라이드*/
    $('.etc_07_wrap .sec_03 .lotto_slide').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:1000,
        pauseOnHover:false,
        slidesToShow: 1,
        slidesToScroll : 1,
    });




    /*hide객체숨김*/
    $('.etc_09 .hide>figure').on('click', function(){
        $('.etc_09 .hide .syasinn_wrap').slideToggle(500);
        $('.etc_09 .hide .syasinn_wrap_02').slideToggle(500);
        $(this).toggleClass('on');
    })

    /*파티_팝업창_04*/
    $('.etc_09 .container .info5').on('click', function(){
        swal ({
            title: "🎈무료 조합 받아 갑니다🎈",
            text: "🎈무료 조합 서브 타이틀🎈",
        });
    });

    /*텍스트 슬라이드*/
    var contentSlider01=$(".content_slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:0,
        // pauseOnHover:false,
        // pauseOnFocus:false,
        dots:false,
        speed:3000,
        centerMode: true,
        variableWidth: true,
        cssEase:"linear",
    });  



    /*슬라이드_10*/
    $('.etc_10_wrap .sec_03 .lotto_slide').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:1700,
        pauseOnHover:false,
        slidesToShow: 4,
        slidesToScroll : 1,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                slidesToShow: 3,
                }
            },

            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                }
            },

            {
                breakpoint: 350,
                settings: {
                slidesToShow: 1,
                }
            },
        ]
    });





//------------------------------------------------------------------
});