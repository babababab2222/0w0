//시간을 다루는 능력
/*setTimeout(),setInterval()두가지의 명령어가있다.
setTimeout() - 지정한 시간이후에 동작시키는 함수
setInterval()- 지정한 시간 주기로 계속 동작한다. 준 시간반복.
 setTimeout(실행 할 함수, 시간(밀리세컨드));
 setInterval(실행할 함수, 시간(밀리세컨드));
 태그 사용할 방식 ┘*/
 let game=0; //7. 게임이라는 변수를 전역으로 만들어줌 전체영역에서 같은 값을 사용하기위해서 게임을 전역변수화시킴.
function start(){ //1.
    document.getElementById("출력").innerHTML="";
    game=setInterval(change_img , 500); //1000의값이 1초이다.
    //game이라는 변수에는 셋인터벌의 인터벌아이디값이 저장된다.
    //인터벌아이티는 타이머번호이다.
    // game 변수에는 setInterval의 interval id가 저장된다.
    //interval id는 setInterval 함수의 고유 이름이다.
    // interval id를 통해서 setInterval를 중지 시킬 수 있다.
}

let 전환=1; //4.

function change_img(){ //2.
    var 앞면="coin_front.png";
    var 뒷면="coin_back.png";
    var 이미지태그=document.getElementById("오백원");

    if(전환==1){ // 1일때는 뒷면 //3.
        이미지태그.src="./static/image/"+뒷면;
        전환=0;
    }else{ // 0일때는 앞면을 주겟다.
        이미지태그.src="./static/image/"+앞면;
        전환=1;
    }
}
function 결과(선택){ //6.
    clearInterval(game); //맞추지않아도 멈춰야해서 이쪽에둠.
    var 앞면="coin_front.png";
    var 뒷면="coin_back.png";
    var 이미지태그=document.getElementById("오백원");

    if(전환==1){ // 1일때는 뒷면 //3.
        이미지태그.src="./static/image/"+뒷면;

    }else{ // 0일때는 앞면을 주겟다.
        이미지태그.src="./static/image/"+앞면;

    }
    if(선택==전환){

        document.getElementById("출력").innerHTML="정답";
    }
}