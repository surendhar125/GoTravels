let headerhtml=`
  <div class="navigation">
    <div id="title">
      <div id="logo">
        <a href="index.html"><img id="lug" src="Logo-5.svg" ></a>
      </div>
      <div id="compname">
        <h1 id="name">GoTravels</h1>
        <h6 id="slogan">... TRAVEL BEYOND THE HORIZON ...</h6>
      </div>
    </div>
  
  
    <div id="icon">
      <a href="https://www.facebook.com/gtholidays"><img class="socialMedia" src="src/facebook_2504903.png"></a>
      <a href="https://www.instagram.com/gtholidays.in/?hl=en"><img class="socialMedia" src="src/instagram_2111463.png"></a>
      <a href="https://www.linkedin.com/company/gtholidays/?originalSubdomain=in"><img class="socialMedia" src="src/linkedin_2504923.png"></a>
      <a href="https://youtube.com/channel/UCkLtp36GCw0_qfHVVJQOFrw"><img class="socialMedia" src="src/youtube_3938026.png"></a>
      <a href="mailto:GoTravels@gmail.com"><img class="socialMedia" src="src/envelope_9073062.png"></a>
    </div>
  </div>

  <nav class="secnav">
    <a id="home" href="index.html"><h4>HOME</h4></a>
    <a id="about" href="aboutus.html"><h4>ABOUT US</h4></a>
    <a id="group" href="grouptour.html"><h4>GROUP TOUR</h4></a>
    <a id="holiday" href="holiday.html"><h4>HOLIDAY PACKAGE</h4></a>
    <a id="honey" href="honeymoon.html"><h4>HONEYMOON PACKAGE</h4></a>
    <a id="contact" href="contact.html"><h4>CONTACT US</h4></a>
    <a id="book" href="book.html"><button>BOOK NOW</button></a>
  </nav>`
document.querySelector('.header').innerHTML=headerhtml;

let footerhtml=`
  <div class="footerf">
    <div class="fff">
     
    <h2>Corporate Office</h2>
    <hr>
    <p>GoTravels Pvt LTD,<br>
      Novel Tech Park,<br>
      Opposite to 1 MG Mall,<br>
      MG Road, Bangalore – 560042<br>
      Karnataka, India.</p>
    </div>
    <div class="ffs">
     
      <h2>Head Office</h2>
      <hr>
      <p>GoTravels Pvt LTD,<br>
        No.1, Gemini Parsn,<br>
        Kodambakkam High Road,<br>
        Nungambakkam, Chennai – 600006<br>
        Tamilnadu, India.</p>
    </div>
   
    <div class="fft">
     
      <h2>Our Branches</h2>
      <hr>
      <div class="ul">
        <ul class="ulf">
          <li>Mumbai</li>
            <li>Hyderabad</li> 
            <li>Bangalore</li>
            <li> Chennai</li>
            <li>Coimbatore</li> 
            <li>Erode</li> 
            <li>Madurai</li> 
        </ul>
     
        <ul class="uls">
          <li>Trichy</li>
          <li>Salem</li>
          <li>Kochi</li>
          <li>Vellore</li> 
          <li>Pondicherry</li> 
          <li>Nagercoil</li>  
          <li>Kanyakumari</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="fs">
    <div class="vertical" id="vertical1"></div>
    <div class="fsf">
    <h3>Call Us</h3>
    <h1>+91 9940882200</h1>
    </div>

    <div class="vertical" id="vertical2"></div>
    <div class="fss">
      <h3>Email Us</h3>
      <a href="mailto:GoTravels@gmail.com"><h1 id="mail">mail@gotravels.in</h1></a>
    </div>
    <div class="vertical" id="vertical3"></div>
    <div class="fst">
      
      <h3>Follow Us</h3>
      <a href="https://www.facebook.com/gtholidays"><img class="socialMedia" src="src/facebook_2504903.png"></a>
      <a href="https://www.instagram.com/gtholidays.in/?hl=en"><img class="socialMedia" src="src/instagram_2111463.png"></a>
      <a href="https://www.linkedin.com/company/gtholidays/?originalSubdomain=in"><img class="socialMedia" src="src/linkedin_2504923.png"></a>
      <a href="https://youtube.com/channel/UCkLtp36GCw0_qfHVVJQOFrw"><img class="socialMedia" src="src/youtube_3938026.png"></a>
      <a href="mailto:GoTravels@gmail.com"><img class="socialMedia" src="src/envelope_9073062.png"></a>
    
    </div>
    
  </div>
  <p id="copyright">Copyright © 2024 by GoTravels Pvt Ltd. All Rights Reserved.</p>
`
document.querySelector('.footer').innerHTML=footerhtml;