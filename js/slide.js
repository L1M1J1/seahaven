/**
 * Created by dell on 2018/9/10.
 */
function getOn(){
    return{
        left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,
        top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop
    };
}
console.log(getOn());

//    logo
var block=document.getElementsByClassName("fi")[0];
   console.log(block);
//    ul
var fL=document.getElementById("fL");
   console.log(fL);

//    li
// var li=fL.children;
// console.log(li);
// var menu=fL.children;
// var menuSub=document.getElementsByClassName("submenu");
// console.log(menuSub);
//鼠标移动

//    for(var i=0;i<li.length;i++){
//    li.onmouseover=function(){
//        menuSub.style.opacity="1";
//        menuSub.style.height="auto";
//        menuSub.style.zIndex="100";
//
//
//    }
//    }
//    console.log(li);


window.onscroll=function(){
    if(getOn().top>=650){

        block.style.position="fixed";
        block.style.visibility="visible";
        block.style.left="0px";
        fL.style.marginLeft="-1340px";
        fL.style.transition="all 0.6s ease-in-out";




//            console.log(block.className);
    }else {
        block.style.position="absolute";
        block.style.left="1400px";
        fL.style.marginLeft="0px";
        fL.style.transition="all 0.6s ease-in-out";
        block.style.visibility="hidden";
        fL.style.position="relative";
    }
};

//    单击事件

var pull=document.getElementById("pull");

//    console.log(li);

pull.onclick=function () {
    if(block.style.left="0px"){
        block.style.position="fixed";
        block.style.left="1400px";
        fL.style.marginLeft="0px";
        fL.style.transition="all 0.6s ease-in-out";
        block.style.visibility="hidden";
        fL.style.position="fixed";
//            menuSub.style.top=
//            menuSub.style.transform="rotate(180deg)";

    }
};


