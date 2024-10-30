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

//trending packages
const placecontainers =[...document.querySelectorAll('.place-container')]; 
const nextBtn = [...document.querySelectorAll('.next-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

placecontainers.forEach((item, i) => {
  let containerDimensions =item.getBoundingClientRect();
  let containerWidth=containerDimensions.width;

  nextBtn[i].addEventListener("click", ()=>{
    item.scrollLeft +=containerWidth/2;
  })

  preBtn[i].addEventListener("click", ()=>{
    item.scrollLeft -=containerWidth/2;
  })
})

//making copy of same logs
var copy=document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);
//making copy of same images
var imgcopy=document.querySelector(".image-slider").cloneNode(true);
document.querySelector(".images").append(imgcopy);
