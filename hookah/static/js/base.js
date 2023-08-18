
model=document.querySelector(".model")
mobmodel=document.querySelector(".mobmodel")
console.log(model && mobmodel)
if(model){
document.querySelector("[data-action='menu']").style="display:block"
window.addEventListener("click",f=>{
if(f.target.dataset.action=="menu"){

mobmodel.style="width:130px;left:0px;"

document.querySelector("[data-action='menu']").style="display:none"
document.querySelector("#close").style="display:block"
}


click = f.composedPath().includes(mobmodel)
click2=f.composedPath().includes(document.querySelector("[data-action='menu']"))
if(!click && !click2){
mobmodel.style="width:0px;left:-20px;"
document.querySelector("[data-action='menu']").style="display:block"
document.querySelector("#close").style="display:none"

}

})
}




 document.querySelector(".cartquan").innerText=document.querySelectorAll(".basketinfo div").length
 document.querySelector(".mobcartquan").innerText=document.querySelectorAll(".basketinfo div").length

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



//card=document.querySelectorAll(".card")
//
//
//card.forEach(f=>{
//
//li=document.createElement("li")
//li.innerText=f.querySelector(".name").innerText
//document.querySelector(".filter").appendChild(li)
//})
//
//document.addEventListener("input",e=>{
//
//val=e.target.value.trim()
//val[0]="B"
//console.log(val)
//el=document.querySelectorAll(".filter li")
//
//if(val !=""){
//el.forEach(e=>{
//if(e.innerText.search(val) == -1){
//    e.style="display:none"
//}
//else{
//console
//e.style="display:block"
//}
//})
//}
//else{
//el.forEach(e=>{
//    e.style="display:none"
//})
//}
//})
//
