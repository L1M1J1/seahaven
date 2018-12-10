/**
 * Created by dell on 2018/9/9.
 */
    //获取按钮
var tab=document.getElementsByClassName("tabs")[0];
var tabs=tab.children;
console.log(tabs);
var box=document.getElementsByClassName("selRight")[0];
var boxs=box.getElementsByClassName("box");
console.log(boxs);
//给每一个按钮添加点击事件
for(var i=0;i<tabs.length;i++){
    // 注册函数处理事件
    (function(n){
        tabs[n].onclick=function(){
            //同类的class属性为空
            for(var j=0;j<tabs.length;j++){
                tabs[j].className="";
                boxs[j].style.display="none";
            }
            this.className="active";
            boxs[n].style.display="block";

        }
    }(i))
}