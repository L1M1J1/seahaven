var videoPlay=document.getElementById("myVideo");
var oncl=true;

function play(){
   if(oncl==true){
       videoPlay.play();
       oncl=false;
   }else{
       videoPlay.pause();
       oncl=true;
   }

   console.log(oncl);


}
