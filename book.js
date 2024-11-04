

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




//no of person & package details in local storage

const number =document.getElementById('noOfPerson');

const travelPlace =document.getElementById('type');

const submit=document.querySelector('.js-form-submit');
submit.addEventListener('click',(e)=>{

  const numbervalue =number.value;

  const place =travelPlace.value;

  localStorage.setItem('noofperson', numbervalue);
  localStorage.setItem('packageId',place);
})

