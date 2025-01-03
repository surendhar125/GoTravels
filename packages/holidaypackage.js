
const packages=[
  {
    id: 'holiday-package-thailand',
    place: 'THAILAND',
    img: 'THAILAND',
    city: 4,
    days: '3 Days / 4 Nights',
    price: 45000
  },
  {
    id: 'holiday-package-dubai',
    place: 'DUBAI - UAE',
    img: 'DUBAI',
    city: 5,
    days: '5 Days / 4 Nights',
    price: 48000
  },
  {
    id: 'holiday-package-india',
    place: 'INDIA',
    img:'india (2)',
    city: 8,
    days: '7 Days / 6 Nights',
    price: 39000
  },
  {
    id: 'holiday-package-japan',
    place: 'JAPAN',
    img:'JAPAN (2)',
    city: 7,
    days: '6 Days / 5 Nights',
    price: 55000
  },
  {
    id: 'holiday-package-china',
    place: 'CHINA',
    img: 'HONGKONG (2)',
    city: 5,
    days: '4 Days / 3 Nights',
    price: 46000}]  


  
let packageHTML='';
  packages.forEach((package)=>{

     packageHTML+=`
       <div class="package">

    <div class="package-img">
      <img src="src/holiday/package/${package.img}.jpg">
    </div>

    <div class="package-details">
      <h1>${package.place}</h1> 
      <p><img class="icon"src="src/holiday/icons/map.png">&ensp;  ${package.city} Cities</p>
      <p> <img class="icon"src= "src/holiday/icons/clock.png">&ensp; ${package.days}</p>  
      <div class="details">
        <p><img class="icon" src="src/holiday/icons/plane.png">  <span class="text">Flight</span> </p>
        <p><img class="icon" src="src/holiday/icons/resort (1).png">  <span class="text">Hotels</span> </p>
        <p><img class="icon" src="src/holiday/icons/dinner.png">  <span class="text">Meals</span> </p>
        <p><img class="icon" src="src/holiday/icons/dslr-camera.png">  <span class="text">Sightseeing</span> </p>
        <p><img class="icon" src="src/holiday/icons/bus.png">  <span class="text">Transport</span> </p>
    </div>
    </div>

    <div class="package-price">
      <p>Starts from</p>
      <h1>&#8377; ${package.price}</h1>
      <p>per person</p>
      <a  href="book.html"><button class="book-btn">BOOK NOW</button></a>
    </div>
    
  </div>
    `;})

document.querySelector('.js-packages').innerHTML=packageHTML;

