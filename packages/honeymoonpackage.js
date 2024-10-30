const packages=[
  {
    place: 'BALI - INDONESIA',
    img: 'bali 4',
    city: 7,
    days: '7 Days / 6 Nights',
    price: 62000
  },
  {
    place: 'MALDIVES',
    img: 'maldives 1',
    city: 3,
    days: '4 Days / 3 Nights',
    price: 48000
  },
  {
    place: 'DUBAI - UAE',
    img:'DUBAI',
    city: 5,
    days: '5 Days / 4 Nights',
    price: 52000
  },
  {
    place: 'INDIA',
    img:'india (2)',
    city: 7,
    days: '7 Days / 6 Nights',
    price: 49000
  },
  {
    place: 'SINGAPORE',
    img: 'singapore (4)',
    city: 6,
    days: '5 Days / 4 Nights',
    price: 56000
  },
  {
    place: 'MALAYSIA',
    img: 'MALAYSIA (2)',
    city: 5,
    days: '4 Days / 3 Nights',
    price: 50000
  }]


  
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
      <p class="includes">	&#8734; All Inclusive</p>
      <div class="details">
        <p><img class="icon" src="src/holiday/icons/plane.png"> Flight</p>
        <p><img class="icon" src="src/holiday/icons/resort (1).png"> Hotels</p>
        <p><img class="icon" src="src/holiday/icons/dinner.png"> Meals</p>
        <p><img class="icon" src="src/holiday/icons/dslr-camera.png"> Sightseeing</p>
        <p><img class="icon" src="src/holiday/icons/bus.png"> Transport</p>
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
