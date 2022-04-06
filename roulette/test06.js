$(function(){
//-------------------------------------------------------------------
    
    var reg = /_\d*/gi;
var generateRandom = function (el, min, max) {
    var ranNum = Math.floor(Math.random()*(max-min+1)) + min,
        $E = $(el);

  $E.removeClass("item_"+ranNum); //'item_' 으로 시작하는 클래스 제거
    setTimeout(function(){ $E.addClass("item_"+ranNum); },1);
    $E.attr("class",$E.attr("class").replace(reg,"_"+ranNum));

    return ranNum;
}
/* 룰렛 돌리기 버튼 */
$('#EVTbtn_1').on('click', function(){
  generateRandom('.roulette',1,1); // 몇번째로 돌릴지 뒤에 숫자로 조정 가능
});

    
    
    
//-------------------------------------------------------------------
});

