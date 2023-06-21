//1.전역변수와 지역변수차이
//2.두개의 함수를 통해 전역과 지역사용 비교.

// let a=10;
// function select(){
//     var a=100; //지역변수
//     a++;
//     return a; //a변수안의 값만 easy로 넘어간다. 이렇ㄱㅔ해야 다른 함수에있는 지역변수를 가져올수있다.
// }
// function easy(){
//     var a=100;
//     alert("출력 : "+select());
// }
// var a=100; //전역변수
// function select(){
   
//     a++;
// }
// function easy(){
//     select();
//     alert("출력 : "+a);
// }
let out=""; //전역변수
function select(val){
    out=out+val;
    document.getElementById("result").value=out;
}
