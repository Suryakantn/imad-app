console.log('Loaded!');
//Change the value of class
var element=document.getElementById('main-text');
element.innerHTML='New Value';

//Slide image new Left side
var img=document.getElementById('madi');
    img.onclick=function(){
      img.style.marginLeft='100px';  
    };
    