

window.addEventListener("click",f=>{
a=f.target.closest(".post")
if(f.target.dataset.action=="plus"){
if(a.querySelector(".quan").innerText<10){
a.querySelector(".quan").innerText=++a.querySelector(".quan").innerText
a.querySelector(".price").innerText=parseInt(a.querySelector(".price").innerText)+parseInt(a.querySelector(".defprice").innerText)
a.querySelector(".valquan").value=a.querySelector(".quan").innerText
}
}
if(f.target.dataset.action=="minus"){
if(a.querySelector(".quan").innerText>1){
a.querySelector(".quan").innerText=--a.querySelector(".quan").innerText
a.querySelector(".price").innerText=parseInt(a.querySelector(".price").innerText)-parseInt(a.querySelector(".defprice").innerText)
a.querySelector(".valquan").value=a.querySelector(".quan").innerText
}
}
if(f.target.dataset.action=="basket"){
form=a.querySelector("form")

f.preventDefault()
$.ajax({
type:form.method,
url:form.action,
data:$(form).serialize(),
success:function(){
x=document.querySelector(".basketinfo")
 aa=a.getAttribute("data-id")
 item=`<div data-id=${aa}></div>`

  if(!x.querySelector(`[data-id='${aa}']`)){
    x.insertAdjacentHTML("beforeend",item);
    document.querySelector(".cartquan").innerText=++document.querySelector(".cartquan").innerText
    document.querySelector(".mobcartquan").innerText=++document.querySelector(".mobcartquan").innerText
}
}

})
//card=document.querySelectorAll(".card")
// var xhttp = new XMLHttpRequest();
//  xhttp.onreadystatechange = function() {
//    if (this.readyState == 4 && this.status == 200) {
//      var xmlDoc =this.response
//
//    aa=a.getAttribute("data-id")
//  var x = new DOMParser().parseFromString( xmlDoc, "text/html").querySelector(".basket")
//    if(!x.querySelector(`[data-id='${aa}']`)){
//    document.querySelector(".cartquan").innerText=++document.querySelector(".cartquan").innerText
//    document.querySelector(".mobcartquan").innerText=++document.querySelector(".mobcartquan").innerText
//}
//   }
//  };
//  xhttp.open("GET", "/basket", true);
//  xhttp.send();

}
})

