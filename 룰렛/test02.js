$(function(){
/*-------------------------------------------------------------------------------*/

var _btnStart;
    var _roll_bg;
    var _items;
    var _mTime;
    function init()
    {
        create();
        addEvent();
    }

    function create()
    {
        _btnStart = $( ".btn_start" );    
        _roll_bg = $( ".roll_bg" );
        _items = [ "포인트 30P", "할인쿠폰 10%", "무료반품 FREE", "할인쿠폰 30%", "선물쿠폰 1+1", "할인쿠폰 20%", "더블적립 x2", "결제금액 100% 페이백" ];
        _mTime = 1;
    }

    function addEvent()
    {
        _btnStart.on( "click", btnStartClick );
    }

    function btnStartClick( $e )
    {
        spinMotion();
    }

    var _count = 0;
    //움직이는 모션
    function spinMotion()
    {
        TweenMax.to( _roll_bg, _mTime, { rotation:360,    ease:Power0.easeInOut, onComplete:function(){
            TweenMax.set(  _roll_bg, { rotation:0 });
            _count ++;
            if( _count > 0 ){
                randomValue();
                return;
            }
            spinMotion();
        }});
        
    }
    //결과값 추출
    function randomValue(){
        var ran = parseInt( Math.random() * _items.length );
        angleCount( ran );
    }
    //결과값 맞게 움직이는 모션
    function angleCount( $ran )
    {
        TweenMax.killTweensOf( _roll_bg );
        TweenMax.set( _roll_bg, { rotation:0 });

        var angle =  360 / _items.length;
        TweenMax.to( _roll_bg, _mTime, { rotation: $ran * angle  , ease:Power0.easeInOut, onComplete:function(){
            alert( _items[ $ran ] +  " 당첨 되었습니다"  );
        }});
    }

    $( document ).ready( function(){
        init();
    });

/*-------------------------------------------------------------------------------*/
});



