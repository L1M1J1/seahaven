/**
 * Created by dell on 2018/9/10.
 */
var wrap=document.getElementById("mybox");
console.log(wrap);
var le;
function r(){
    if(wrap.style.marginLeft==="-5000px"){
        le=0;
    }else{
        le=parseInt(wrap.style.marginLeft)-1000;

    }
    wrap.style.marginLeft=le+"px";
    console.log(wrap.style.marginLeft);
}

function l(){
    if(wrap.style.marginLeft==="0px"){
        le=-5000;
    }else{
        le=parseInt(wrap.style.marginLeft)+1000;
    }
    wrap.style.marginLeft=le+"px";
}


