
let toggle=false;

let outer=document.getElementById("bahar");
let inner=document.getElementById("andar");
let heading=document.getElementById("text");
let bodyTag=document.getElementsByTagName("body")[0];

outer.addEventListener("click",()=>{

  if(!toggle){
    heading.classList.add("white-color");
    bodyTag.classList.add("bck-black-color");
     inner.style.marginLeft="100px";
      toggle=true;
  }

   else{
    heading.classList.remove("white-color");
    bodyTag.classList.remove("bck-black-color");
      inner.style.marginLeft="1px";
       toggle=false;
   }

})