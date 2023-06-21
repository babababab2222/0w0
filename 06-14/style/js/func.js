
//함수의 형태 4가지
// 1. 입력과 출력이 없는 형태
// 2. 입력은 있고 출력이 없는 형태
// 3. 입력은 없고 출력만 있는 형태
// 4. 입력과 출력이 모두다 있는 형태

/*함수에서 입력이라는 것은 함수의 내용이 실행되기
위해서 꼭 필요한 값이 있다면 함수외부로부터
값을 받는것을 입력이라고 한다.
전문 용어로 인자인수, 매개변수라고 한다.
함수에 매개변수가 있다면 입력이 필요하다.
함수의 가로안에 들어올수있는 변수가 매개변수임. 매개변수는
하나만 입력가능한게 아니라 한줄에 여러개 가능.

// 함수에서 출력은 함수에서 생성된 값을 다른함수나 다른곳에
// 보내고자 할 경우에 사용된다.
// return 을 사용해서 밖으로 내보낸다.*/
// // function sum(a,b){ //a=10, b=20
// //     alert(a+b);
// // }
// function sum(a,b){
//     var sum=document.getElementById("sum_result"); // 현재문서에서 sum_result인 녀석을 가져와라라는뜻.
//     sum.innerHTML=a+b; //= 변수이름이 sum인아이에 a+b된 값을 표시해라.
// }
// function plus(){
//     var n1=document.getElementById("num1");
//     var n2=document.getElementById("num2");
//     var res=document.getElementById("result2");

//     res.innerHTML=Number(n1.value)+parseInt(n2.value); //인풋태그안에(.)있는 값(valus)
// } //인풋의 타입이 텍스트여서 텍스트처럼 인식되니 텍스트타입을 숫자로 바꿔주는 작업을 해야함.
// //앞에 number,paseInt를 써준다.
// //웹에서 입력하는 모든값은 전부 텍스트이라 인풋타입을 텍스트에서 넘버로 해준다해서
// //숫자로인식하는게 아니다.
// //넘버로 하는이유는 숫자만 입력가능하게 하기위해서.

// //  웹에서 입력하는 모든값은 전부 텍스트이다.
// // input 태그에 입력한 값을 자바스크립트로 가져오려면
// // value로 속성을 사용해야한다.
// // 모든 input태그에 값은 value에 저장되어있다.
// // getElement를 통해서 input 태그를 가져오고
// // 가져온 input 태그에서 value값을 뽑아내기
// function myage(){
//     var age1=document.getElementById("birth_year");
//     var age2=document.getElementById("age");
//     age2.innerHTML=2023-Number(age1.value);
// }
// function score_calc(){ //HTML의 아이디와 자바스크립트의 아이디는 별개로 같이써도된다.
//     var kor=document.getElementById("kor");
//     var mat=document.getElementById("mat");
//     var mus=document.getElementById("mus");

//     var res=document.getElementById("result3");

//     if(kor.value==''|| !(kor.value>=0 && kor.value <=100)){//코리아의입력창에 비어있다라는 뜻.비어있으면
//         alert("국어점수 입력해!");
//         kor.focus();//자동으로 커서가 국어입력창에 들어가게끔.
//       // !(kor.value>=0 && kor.value <=100) 
//         return;
//     }else if(mat.value=='' || !(mat.value>=0 && mat.value <=100)){//수학의입력창에 비어있다라는 뜻.비어있으면
//         alert("수학점수 입력해!");
//         mat.focus();//자동으로 커서가 수학입력창에 들어가게끔.
//         return;
//     }else if(mus.value==''|| !(mus.value>=0 && mus.value <=100)){//음악의입력창에 비어있다라는 뜻.비어있으면
//         alert("음악점수 입력해!");
//         mus.focus();//자동으로 커서가 음악입력창에 들어가게끔.
//         return; //return -함수에 있는 값을 함수밖으로 내보낼때 사용되기도 하고.
//                 //함수안에서 return이 실행되면 해당함수를 종료하고 값을 내보낸다.
//     }


// var tot=total(Number(kor.value),Number(mat.value),Number(mus.value));  //total();  토탈이라는 함수 실행
// var avg_val=avg(tot);
// res.innerHTML="총점 :"+tot+"평균 : "+avg_val;
// }
// function avg(tot){  // avg.tot = score_calc.tot와같다.
//     return tot/3;
// }

// function total(k,m,s){
//     return(k+m+s);
// }
//-------------------------------------------------------------------
// function my_minus_life(){
//     var soju=document.getElementById("soju");
//     var min=document.getElementById("minute");
//     var h=document.getElementById("hour");
//     var d=document.getElementById("day");



//     if(soju.value==''){
//         alert("몇잔 마셧는지 입력하세요");
//         soju.focus();
//         return;
//     }
// var life=Number(soju.value)*2*365*20;
// min.innerHTML="단축수명 : "+life+"분";
// h.innerHTML="단축수명 : "+(life/60)+"시간";
// d.innerHTML="단축수명 :"+(life/60/24)+"일";
// }

// function my_order(){
//     var main_menu = document.getElementById("night_snack");
//     var side_menu = document.getElementById("side_menu");
//     var alc = document.getElementById("alc");
// //출력 엘리먼트
// var order_list=document.getElementById("order_result");

// var out="";
// var temp=menu(main_menu.value);/*메뉴입력시 판매하는 메뉴입력하면 금액(숫자)
// 가 return되고, 판매하지않는 메뉴입력시 문자열이 리턴된다.*/

// out+=main_menu.value+"금액 :"+temp+"원<br>"; //출력용으로 result의 역활로 쓰임.

// var temp1=menu(side_menu.value);
// out+= side_menu.value+"금액 : "+temp1+"원<br>";

// var temp2=menu(alc.value);
// out+= alc.value+"금액 : "+temp2+"원<br>";

// if(typeof(temp)==='string'|| typeof(temp1)==='string'||typeof(temp2)==='string'){ //탬프에는 숫자와 판매하지않는메뉴입니다 뿐인데 문자열이들어오면
//     alert("판매하지 않는 메뉴입니다"); //안내창을 띄우겠다.라는 의미로 넣어준 태그
    
//     main_menu.value=''; //입력한 내용 리셋 이걸 안해주면 전에 사용한내역이 남아있음.
//     side_menu.value='';//입력한 내용 리셋
//     alc.value='';//입력한 내용 리셋
//     main_menu.focus(); //입력의 편의를 위해서 포커스를 메인메뉴에 적어준것.
//     return;
// } //탬프에있는 값이 문자인지 숫자인지 구별하는태그
// order_list.innerHTML=out;
// }
//해당음식이 얼마인지 구하는 식.
/*swich문은 if문과 다르게 조건식이 참이냐 거짓이냐에 따라 동작하는 조건문이 아니다.
switch문은 값을 넣어서 해당 값에 따라 동작하도록 선택하는 문이다.
즉 여러분이 지금 사용하고 있는 vscode의 메뉴가 바로 switch문으로
만들어진것이다. 메뉴에서 내가 폴더열기를 선택하면
탐색창이 실행된다.
switch문에서 동작할 내용 선택은 case로 만들어준다
여러개의 case를 만들 수 있다.
//case는 선택지라고 생각하면된다.
switch(10){
    case 1:
        1을 선택하면 동작 할 내용
    case 5:
        5을 선택하면 동작 할 내용
    case 100:
        100을 선택하면 동작 할 내용
    case 10:
        10을 선택하면 동작 할 내용
}
*/
// function menu(name){
//     var money=0;
//     switch(name){
//         case"족발":
//         money=28000; break; //switch case에서 break를 하지않으면
//                              //밑에 있는 case도 실행된다.
//         case "반반치킨":
//             money=22000; break;
//         case "무뼈닭발":
//             money=19000; break;
//         case "페퍼로니피자":
//             money=18000; break;
//         case "짬뽕탕":
//             money=22000; break;
//         case "포케": money=15000; break;
//         case "감자튀김": money=3000; break;
//         case "염통꼬치": money=4000; break;
//         case "타코야끼": money=6000; break;
//         case "치즈볼": money=5000; break;
//         case "테라":money=4000; break;
//         case "피치하이볼": money=8000; break;
//         case "진로": money=4000; break;
//         case "새로주": money=4000; break;            
//         case "카스": money=4000; break;
//         case "발렌타인30살": money=1100000; break;
//         case "시바스리갈": money=59800; break;
//         default: //case에 없는 값 입력시 default가 실행된다.
//             return "판매하지 않는 메뉴입니다.";
    
//     }
//     return money;
// }
var out="";
function my_order(){
    var mm=document.getElementById("main_menu");
    var hot_ice=document.getElementById("HI");
    var size=document.getElementById("size");
    var res=document.getElementById("order_result");
    

var temp=menu(mm.value);
out+=mm.value+"금액 :"+temp+"원<br>";
var temp1=menu(hot_ice.value);
out+=hot_ice.value+"금액 :"+temp1+"원<br>";
var temp2=menu(size.value);
out+=size.value+"금액 :"+temp2+"원<br>";

var sum="합계 :"+Number(temp+temp1+temp2);

if(typeof(temp)==='string'|| typeof(temp1)==='string'||typeof(temp2)==='string'){ //탬프에는 숫자와 판매하지않는메뉴입니다 뿐인데 문자열이들어오면
    alert("판매하지 않는 메뉴입니다");

    mm.value='';
    hot_ice.value='';
    size.value='';
    return;
}
res.innerHTML=out;
}

function menu(name){
    var money=0;
    switch(name){
        case "아메리카노": money=2000; break;
        case "바닐라라떼": money=2500; break;
        case "돌체라떼": money=3000; break;
        case "콜드브루": money=3000; break;
        case "Hot": money=500; break;
        case "Ice": money=500; break;
        case "M": money=0; break;
        case "L": money=1000; break;
        default: 
            return "주문내역을 확인해주세요 갱님";
    }
    return money;
}
