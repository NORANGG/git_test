$(function(){
//------------------------------------------------------------------
    
// var today = new Date();  //현재 날짜 정보 제공
// var dday = new Date(2022,12,25);  //디데이 날짜 정보 제공. 원하는 날짜보다 -1달 하기. 혹은 ("January 25, 2023 0:00:00"); 으로 설정

// var gap = dday.getTime() - today.getTime();  //남은 일 수 = 특정날짜 - 현재날짜

// var result = Math.ceil (gap / (1000 * 60 * 24));  //소수점이하 올림하여 남은일수 / 1일(60분*24)



var dday = new Date("January 25, 2023 0:00:00").getTime();
setInterval(function(){   //setInterval 은 주기적으로 갱신됨. setTime은 하루에한번만!
    var today = new Date().getTime();   //현재 날짜의 밀리초 계산.
    var distance = dday - today;   //gap도 ㅇㅋ distance도 ㅇㅋ
    var day = Math.ceil(distance / (1000 * 60 * 60 * 24));
    var hour = Math.ceil((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.ceil((distance % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.ceil((distance % (1000 * 60)) / 1000);

    //화면에 나옴
    document.getElementById("d-day").innerHTML = "내 생일 D-DAY까지 " + day + "일 " + hour + "시간 " + min + "분 " + sec + "초 남았습니다.";
}, 1000);












    
//------------------------------------------------------------------
});



































