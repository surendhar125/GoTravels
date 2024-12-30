//to top icon
var totop = document.querySelector(".to-top img");
window.addEventListener("scroll", ()=>{
  if(window.pageYOffset >300){
    totop.classList.add("active");
  }
  else{
    totop.classList.remove("active");
  }
})