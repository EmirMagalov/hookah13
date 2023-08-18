
try{
function Del(){
sum=document.querySelectorAll(".border")
n=0
sum.forEach(f=>{
f.querySelector(".price").innerText=f.querySelector(".pricenone").innerText*f.querySelector(".quan").innerText
n=n+parseInt(f.querySelector(".price").innerText)
})
document.querySelector(".totalprice").innerText=n
document.querySelector(".pay .price").value=n
}
function Empty(){
sum=document.querySelectorAll(".border")
total=document.querySelector(".total")
empty=document.querySelector(".empty")
ar=document.querySelector(".areas")
if(sum.length<1){
total.style="display:none;"
empty.style="display:block;"
ar.style="height:500px;"
}
}
Empty()
Del()
}
catch(err){
console.log("ok")
}

try{
function Goods(){
n=[]
goods=document.querySelectorAll(".border")
goods.forEach(f=>{
n.push(f.querySelector(".descr h2").innerText)
document.querySelector(".pay .goodsname").value=n
})
}
}
catch(err){
console.log("ok")
}
Goods()
window.addEventListener("click",f=>{
if (f.target.dataset.action=="del"){
bask=f.target.closest(".border")
form=bask.querySelector(".delform")
f.preventDefault()
$.ajax({
type:form.method,
url:form.action,
data:$(form).serialize(),
success:function(){
 document.querySelector(".cartquan").innerText=--document.querySelector(".cartquan").innerText

bask.remove()
Del()
Empty()
}
})
}
if (f.target.dataset.action=="basketplus"){
f.preventDefault()
calk=f.target.closest(".calkulatebasket")
form=calk.querySelector(".plusform")
$.ajax({
type:form.method,
url:form.action,
data:$(form).serialize(),
success:function(){
if(calk.querySelector(".quan").innerText<10){
calk.querySelector(".quan").innerText=++calk.querySelector(".quan").innerText
Del()
}
}
})

}
if (f.target.dataset.action=="basketminus"){
f.preventDefault()
calk=f.target.closest(".calkulatebasket")
form=calk.querySelector(".minusform")
$.ajax({
type:form.method,
url:form.action,
data:$(form).serialize(),
success:function(){
if(calk.querySelector(".quan").innerText>1){
calk.querySelector(".quan").innerText=--calk.querySelector(".quan").innerText
Del()
}
}
})

}
})

//
// var xhttp = new XMLHttpRequest();
//  xhttp.onreadystatechange = function() {
//    if (this.readyState == 4 && this.status == 200) {
//      var xmlDoc =this.response
//
//
//  var x = new DOMParser().parseFromString( xmlDoc, "text/html").querySelectorAll(".border").length
//
//   }
//  };
//  xhttp.open("GET", "/basket", true);
//  xhttp.send();



