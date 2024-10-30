function sendemail(){

var email=document.getElementById("email").value;
var name=document.getElementById("names").value;
var phone_no=document.getElementById("phone").value;
var destination=document.getElementById("destination").value;
var date=document.getElementById("date").value;
var noofpeople=document.getElementById("noofpeople").value;
var type=document.getElementById("type").value;

var templateParams = {
      email: email,
      name: name,
      phone_no: phone_no,
      place: destination,
      date: date,
      number: noofpeople,
      type: type 
    };

    emailjs.send('service_0d9sbpz', 'template_cc5wgzu', templateParams)
.then(function(response) {
   console.log('SUCCESS!', response.status, response.text);
   window.alert("Sent successfully!");
   
})

   
}
 