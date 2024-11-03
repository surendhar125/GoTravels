let destination=document.querySelector('.place');
document.querySelector('#holiday').addEventListener('click',()=>{
  destination.innerHTML=`
         <option value="" disabled selected>Choose the Destination</option>
          <option value="THAILAND" >THAILAND</option>
          <option value="DUBAI - UAE">DUBAI - UAE</option>
          <option value="INDIA">INDIA</option>
          <option value="JAPAN">JAPAN</option>
          <option value="CHINA">CHINA</option>
  `;
})
document.querySelector('#honeymoon').addEventListener('click',()=>{
  destination.innerHTML=`
         <option value="" disabled selected>Choose the Destination</option>
          <option value="BALI - INDONESIA" >BALI - INDONESIA</option>
          <option value="MALDIVES">MALDIVES</option>
          <option value="DUBAI - UAE">DUBAI - UAE</option>
          <option value="INDIA">INDIA</option>
          <option value="SINGAPORE">SINGAPORE</option>
          <option value="MALAYSIA">MALAYSIA</option>
  `;
})
document.querySelector('#group').addEventListener('click',()=>{
  destination.innerHTML=`
         <option value="" disabled selected>Choose the Destination</option>
          <option value="JAPAN" >JAPAN</option>
          <option value="DUBAI - UAE">DUBAI - UAE</option>
          <option value="INDIA">INDIA</option>
          <option value="SINGAPORE">SINGAPORE</option>
          <option value="MALAYSIA">MALAYSIA</option>
  `;
})

function personDetailss(){
  const noOfPerson =document.getElementById('noOfPerson').value;
  let personHtml= document.querySelector('.personDetailsGroup');
    
  for(let i=1; i<=noOfPerson;i++){
    
      personHtml.innerHTML+=`
      <form class="personDetails">
      <h1>Person ${i} Details</h1>
        <div class="fName">
          <lable class="label" for="firstName">First Name</lable>
          <input type="text" id="firstName" required>
        </div>
        <div class="lName">
          <lable class="label" for="firstName">Last Name</lable>
          <input type="text" id="firstName"  required>
        </div>

      <label class="label" for="age">Age</label><br>
      <input type="number" id="age" required><br>
      <div class="gender">
        <label class="label" for="gender">Gender</label><br>
        <div class="genderOption">
          <div>
            <label for="male" >Male</label>
            <input type="radio" id="male" value="Male"  name="gender">
          </div>
          <div>
            <label for="female">Female</label>
            <input type="radio" id="female" value="Female" name="gender">
          </div>
      </div>
    </form>`;

  };  
  if(noOfPerson=>1){
    personHtml.innerHTML+=`<a href="../payment.html"><button class="formButton personDetailsButton">Proceed To Payment</button></a>`;
  };
};
