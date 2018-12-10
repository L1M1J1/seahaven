/**
 * Created by dell on 2018/9/8.
 */
    //获取节点
var wrrp=document.getElementById("bigDiv");
var doMy=wrrp.getElementsByClassName("box");



//获取圆点
var point=document.getElementsByClassName("point")[0];
var ul=point.children[0];
var arrows=ul.children;
var newLeft;
var time=null;

// 右箭头单击
function right(){
    initial++;
    if(initial>3){
        initial=0;
    }
    showDot();
    //判断盒子的距离
    if(wrrp.style.marginLeft==="-2460px"){
        newLeft=0;
    }else{
        newLeft=parseInt(wrrp.style.marginLeft)-820;
    }

    wrrp.style.marginLeft=newLeft+"px";



}
//左箭头单击
function left(){
    initial--;
    if(initial<0){
        initial=3;
    }
    showDot();
    if(wrrp.style.marginLeft==="0px"){
        newLeft=-2460;
    }else{
        newLeft=parseInt(wrrp.style.marginLeft)+820;

    }
    wrrp.style.marginLeft=newLeft+"px";





}


//设置循环播放
function auto() {
    time=setInterval(function(){
        right();
    },5000);
}
auto();

//清除
var container=document.getElementById("container");
container.onmouseenter=function(){
    clearInterval(time);
}
container.onmouseleave=function(){
    auto();
}

//圆点
//设置一个初始值
var initial=0;
function showDot(){
    for(var i=0,len=arrows.length;i<len;i++){
        arrows[i].className="";
    }
    arrows[initial].className="select";
}



