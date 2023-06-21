function ById(name){ // 1.인풋태그 다쓰기 귀찮아서 하나를 만들어놓고 밑에간출여 쓰게할수있게하는거
    return document.getElementById(name)
}

let out=""; //전역변수 - 어디에도 속하지 않은 변수.
            //var타입은 재선언이 가능하지만(동일한 이름으로 만들수있다. a쓰고 다른곳에서 a라 쓸수있음.대신 그전의 a값은 사라짐.)
            // let타입은 재선언이 불가하다.(동일한 이름으로 만들수없다.나중에 쓴 이름이 오류처리됨.)
/*var a=10;
  var a=40;
  let b=20;
  let b=30; 오류처리*/
function order(){ //인풋태그만 가져온거.
    var drink=ById("drink");
    var tmp=ById("ice_hot");
    var size=ById("size");

 var total=drink_menu(drink.value); //3. 금액합계가져오기
if(total==0){ //4.판매하지 않는 메뉴 입력시 값정하기
 alert("판매하지않는 메뉴입니다.");
 drink.value=''; //음료명 input값 비워주기
 drink.focus();
 return;
}
//모든알파벳을 소문자로 변환-toLowerCase()
//모든알파벳을 대문자로 변환-toUpperCase()
if(!(tmp.value.toLowerCase()==="ice"||tmp.value.toLowerCase()==="hot")){//4.아이스인지핫인지결정짓기
//저건 잘입력한거고 우린 반대의입장을 코딩해야해서 낫이라는! 써주기.
 alert("ice또는 hot이라고 입력하세요");
 tmp.value='ice';//잘못입력했을때 알림창이뜨고 기본값을 아이스로 넣어준거.
 tmp.focus();
 return;

}
if(!(size.value.toLowerCase()==="m"||size.value.toLowerCase()==="l")){ //5.사이즈정해주기.
    alert("M또는 L사이즈를 입력하세요");
    size.value="M";
    size.focus();
    return;
}
total=total+(size.value.toLowerCase()==='m'? 0: 1000); //6. 사이즈가 m이라면 0원이고 L,라면 1000원추가라는 뜻.

//7.출력문! 출력은 입력하는곳에 나와야해서 여기다가 적음!
out += drink.value + " / " + tmp.value + " / " +size.value +" : "+total+"원<br>";//8.합계식.
ById("list").innerHTML=out; // 9. 출력문!
}

function drink_menu(drink){ //2번 메뉴정해주기.
    switch(drink){
        case "아메리카노": return 2000;
        case "카페라떼" : return 3000;
        case "돌체라떼" : return 4500;
        case "모카라떼" : return 3000;
        case "수박주스" : return 4500;
        case "바나나주스" :return 4500;
        default: return 0;
    }
}