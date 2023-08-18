//document.cookie = "age18=True";
//
//console.log(document.cookie.split(";")[1])
document.querySelector(".true").onclick=f=>{
document.querySelector(".modal").style="display:none"
document.querySelector("body").style="overflow-y: scroll"
document.cookie = "age18=True;"
}

if(document.cookie.split(";")[1]){
document.querySelector(".modal").style="display:none"
}
else{
document.querySelector(".modal").style="display:block"
document.querySelector("body").style="overflow: hidden"
}
document.querySelector(".false").onclick=f=>{
window.open("https://www.schoolsw3.com/js/js_window.php","_self")
}