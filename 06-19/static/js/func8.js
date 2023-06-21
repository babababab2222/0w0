function score(){
    var k=document.getElementById("kor").value;
    var m=document.getElementById("mat").value;
    var e=document.getElementById("eng").value;

    var res=document.getElementById("score_sum");

    if(k===''||!(k>=0 && k<=100)){
        alert("국어 점수 입력해");
        k.focus();
        return;

    }else if(m===''||!(m>=0 && m<=100)){
        alert("수학 점수 입력해");
        m.focus();
        return;
    }else if(e==='' ||!(e>=0 && e<=100)){
        alert("영어 점수 입력해");
        e.focus();
        return;
    }
    var out='';
    var tot=total(Number(k),Number(m),Number(e));
    
    out=" 국어 : "+k+" 등급 : "+score_calc(k)+
        "<br> 수학 : "+m+" 등급 : "+score_calc(m)+
        "<br> 영어 : "+e+" 등급 : "+score_calc(e)+
        "<br> 총점 : "+tot+"<br>";

    out+= "  평균 : "+parseInt(tot/3)+"점"+score_calc(total);
    res.innerHTML=out;
}

function score_calc(score){
if(score>=90){
    return"A등급";
}else if((score>=80)&&(score<=89)){
    return"B등급";
}else if((score>=70)&&(score<=79)){
    return"C등급";
}else{
    return"F등급";
}
}
function total(k,m,e){
    return k+m+e;
}


