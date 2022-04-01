$(document).ready(function () {
    var prize = 'product03';
    // roulette_product_end = 이벤트 종료 : 룰렛엔 없어용

    // product01 = 조엘 컬러바
    // product02 = 크리스피기프티콘
    // product03 = 스타벅스 기프티콘
    // product04 = 더블 5,000원 쿠폰번호 1397
    // product05 = 더블 3,000원 쿠폰번호 1396
    // product06 = 더블 1,000원 쿠폰번호 1395

    // product07 = 이미참여하셨습니다

    $('#start-rotate').click(function () {
        if (prize == 'product01') {
            var degrees = 65;
            rotate(degrees);
            $('#resultImg').attr('src',
                'http://webimg.jestina.co.kr/UpData/jestina/event/201201_jWeek/roulette_product_01.png'
            );
            window.setTimeout(resultLayer, 5400);
        } else if (prize == 'product02') {
            var degrees = 120;
            rotate(degrees);
            $('#resultImg').attr('src',
                'http://webimg.jestina.co.kr/UpData/jestina/event/201201_jWeek/roulette_product_02.png'
            );
            window.setTimeout(resultLayer, 5400);
        } else if (prize == 'product03') {
            var degrees = 0;
            rotate(degrees);
            $('#resultImg').attr('src',
                'http://webimg.jestina.co.kr/UpData/jestina/event/201201_jWeek/roulette_product_03.png'
            );
            window.setTimeout(resultLayer, 5400);
        } else if (prize == 'product04') {
            var degrees = 220;
            rotate(degrees);
            $('#resultImg').attr('src',
                'http://webimg.jestina.co.kr/UpData/jestina/event/201201_jWeek/roulette_product_04.png'
            );
            window.setTimeout(resultLayer, 5400);
        } else if (prize == 'product05') {
            var degrees = 290;
            rotate(degrees);
            $('#resultImg').attr('src',
                'http://webimg.jestina.co.kr/UpData/jestina/event/201201_jWeek/roulette_product_05.png'
            );
            window.setTimeout(resultLayer, 5400);
        } else if (prize == 'product06') {
            var degrees = 160;
            rotate(degrees);
            $('#resultImg').attr('src',
                'http://webimg.jestina.co.kr/UpData/jestina/event/201201_jWeek/roulette_product_06.png'
            );
            window.setTimeout(resultLayer, 5400);
        }
    });

    function rotate(degrees) {
        $("#roulette-gift").rotate({
            angle: 0,
            animateTo: 360 * 5 + degrees,
            easing: $.easing.easeInOutElastic,
            duration: 4000
        });
    };

    function resultLayer() {
        $('.resultLayer').css('display', 'block');
    };

    $('#closeLayer').click(function () {
        $('.resultLayer').css('display', 'none');

        $("#roulette-gift").rotate({
            angle: 0,
            duration: 0
        });
    });
});