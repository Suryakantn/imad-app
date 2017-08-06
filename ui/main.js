console.log('Loaded!');
//Change the value of class
var element=document.getElementById('main-text');
element.innerHTML='New Value';

//Slide image new Left side
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
   img.onclick=function(){
       var interval=setInterval(moveRight,100);
   };

    