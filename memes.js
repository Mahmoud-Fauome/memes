let input=document.querySelector("input")
let btn=document.querySelector("button")
let result=document.querySelector("div")

btn.addEventListener("click",()=>{
fetch("https://api.imgflip.com/get_memes")
.then((e)=> e.json())
.then((t)=>{
   let data=t.data.memes;
   data.forEach((e,t) => {
if (parseInt(input.value)===t) {
 result.innerHTML=`
    <h4>${e.name}<h4/>
    <img width="45%" src="${e.url}">` 
    input.value="";
}else if(input.value>99||input.value<0){
 result.innerHTML=`
    <h4>Invaild Number<h4/>`
    input.value="";
}else if(isNaN(input.value)){
 result.innerHTML=`
    <h4>Enter Vaild Number<h4/>`  
     input.value="";
   }
  })
 })
})