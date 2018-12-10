/**
 * Created by dell on 2018/9/9.
 */
function getOn(){
    return{
        left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,
        top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop
    };
}
var sec4=document.getElementsByTagName("section")[3];
var bo=document.getElementsByClassName("box")[4];
console.log(sec4.offsetHeight);
window.onscroll=function(){

    if(getOn().top>=2258){
        bo.style.transition="all 1s";
        bo.style.top="200px";
        console.log(bo.style.top);
    }
    else{
        bo.style.top="0px";
    }
};