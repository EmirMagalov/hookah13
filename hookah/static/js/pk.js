window.addEventListener("click",f=>{
content=f.target.closest(".content")

if(f.target.dataset.action=="pluspk"){
if(content.querySelector(".quan").innerText<10){
content.querySelector(".quan").innerText=++content.querySelector(".quan").innerText
content.querySelector(".price").innerText=parseInt(content.querySelector(".defprice").innerText)*parseInt(content.querySelector(".quan").innerText)
content.querySelector(".valquan").value=content.querySelector(".quan").innerText
}
}
if(f.target.dataset.action=="minuspk"){
if(content.querySelector(".quan").innerText>1){
content.querySelector(".quan").innerText=--content.querySelector(".quan").innerText
content.querySelector(".price").innerText=parseInt(content.querySelector(".defprice").innerText)*parseInt(content.querySelector(".quan").innerText)
content.querySelector(".valquan").value=content.querySelector(".quan").innerText
}
}
})