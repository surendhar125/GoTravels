const slides=document.querySelectorAll(".slides img");
let slideIndex=0;
let intervalId=null;

document.addEventListener("DOMContentLoaded",initializeSlider); //calling function when dom loaded(page loaded)

function initializeSlider(){  //initialising 1st image
  if(slides.length>0){
  slides[slideIndex].classList.add("displaySlide");  //adding 1st img to display
  intervalId= setInterval(nextSlide, 5000);  //it returns a interval id //automatic slide show of interval 5s
  }
}

function showslide(index){
  if(index >=slides.length){ 
    slideIndex =0;  //if am having 3 images the index excees 3 it goes to 0 again looping images
  }
  else if(index <0){
    slideIndex =slides.length-1;  //at first slide if we hit previous button it goes to last slide
  }

  slides.forEach(slide => {
    slide.classList.remove("displaySlide");   //removing displayslide for 1st image. so it no longer display
  }); 

  slides[slideIndex].classList.add("displaySlide"); //adding rem items
}

//for buttons
function prevSlide(){  //for buttons
  clearInterval(intervalId);
  slideIndex--;
  showslide(slideIndex);
}
function nextSlide(){  //for buttons
  clearInterval(intervalId);

  slideIndex++;
  showslide(slideIndex);
}
