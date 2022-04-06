$(function(){
//------------------------------------------------------------------


    const wheel = document.querySelector('.wheel'); //여기에 대한 값 찾음
    const startButton = document.querySelector('.button');
    // let deg = 0; //각도는 0으로 둔다.


    startButton.addEventListener('click', () => {   // 지정한 유형의 이벤트를 대상이 수신할때마다 호출할 함수 설정
        startButton.style.pointerEvents = 'none';  //마우스 커서 이벤트 비활성화
        // deg = Math.floor(100 + Math.random() * 100); 이건 랜덤으로 돌릴때 사용 
        deg = Math.floor(1800);
        wheel.style.transition = 'all 5s ease-out';
        wheel.style.transform = `rotate(${deg}deg)`;
    });

    wheel.addEventListener('transitionend', () => {
        startButton.style.pointerEvents = 'auto'; //-> 계속 돌릴 수 있음.
        wheel.style.transition = 'none';
        const actualDeg = deg % 360; //-> 계속 돌릴 수 있음. or const대신 let(할당된값변경가능)/var(즉시실행함수)
        wheel.style.transform = `rotate(${actualDeg}deg)`;
    })


    if (startButton.addEventListener('click', () => { deg = Math.floor(1800); wheel.style.transition = 'all 5s ease-out'})) {
        console.log (alert("쇼핑100쿠폰 당첨ㅎ"));
    }
    

//------------------------------------------------------------------
});