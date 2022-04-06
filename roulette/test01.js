$(function(){
/*-------------------------------------------------------------------------------*/
    var rolLength = 6; 
    
    var setNum; //랜덤 숫자 담을 변수
    var hiddenInput = document.createElement("input"); //히든인풋을 사용
    hiddenInput.className = "hidden-input";

    // 랜덤 숫자 부여
    const rRandom = () => {
        var min = Math.ceil(0);
        var max = Math.floor(rolLength - 1);
    return Math.floor(Math.random() * (max - min)) + min;
    };

    // 돌림판 인터렉션
    const rRotate = () => {
            var panel = document.querySelector(".rouletter-wacu");
            var btn = document.querySelector(".rouletter-btn");
            var deg = [];
            for (var i = 1, len = rolLength; i <= len; i++) {
            deg.push((360 / len) * i);
        }

        var num = 0;
        document.body.append(hiddenInput);
        setNum = hiddenInput.value = rRandom();

        var ani = setInterval(() => {
        num++;
        panel.style.transform = "rotate(" + 360 * num + "deg)";
        btn.disabled = true; //button,input
        btn.style.pointerEvents = "none"; //a 태그

        if (num === 50) {
            clearInterval(ani);
            panel.style.transform = "rotate(" + deg[setNum] + "deg)";
        }
        }, 50);
    };

    // 결과 팝업
    const rLayerPopup = (num) => {
        switch (num) {
        case 1:
            alert("당첨!! 스타벅스 아메리카노");
            break;
        case 3:
            alert("당첨!! 햄버거 세트 교환권");
            break;
        case 5:
            alert("당첨!! CU 3,000원 상품권");
            break;
        default:
            alert("꽝! 다음기회에");
        }
    };

    // 돌림판 리셋
    const rReset = (ele) => {
        setTimeout(() => {
            ele.disabled = false;
            ele.style.pointerEvents = "auto";
            rLayerPopup(setNum);
            hiddenInput.remove();
        }, 5500);
    };

    document.addEventListener("click", function (e) {
            var target = e.target;
            if (target.tagName === "BUTTON") {
            rRotate();
            rReset(target);
        }
    });
    


/*-------------------------------------------------------------------------------*/


});

