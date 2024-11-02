document.getElementById('cardNumber').addEventListener('input', formatCardNumber);
document.getElementById('expiryMonth').addEventListener('input', formatMonth);
let payment = document.querySelector('#paymentForm');

document.querySelector('.cardPayment').addEventListener('click',()=>{
  payment.innerHTML=`
          <div class="form-group">
              <label for="cardNumber">Card Number</label>
              <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" maxlength="19" required>
          </div>
          <div class="form-group-inline">
            <div class="form-group">
                <label for="expiryMonth">Expiry Month / Expiry Year</label>
                <input type="text" id="expiryMonth" placeholder="MM / YY" maxlength="7" required>
            </div>

            <div class="form-group">
                <label for="cvv">CVV</label>
                <input type="password" id="cvv" placeholder="123" maxlength="3" required>
            </div>
          </div>
          <div class="form-group">
              <label for="cardholderName">Cardholder's Name</label>
              <input type="text" id="cardholderName" placeholder="Leo Das" required>
          </div>
          <button type="button" onclick="processPayment()">Proceed With Payment </button> 
    `
    document.getElementById('cardNumber').addEventListener('input', formatCardNumber);
    document.getElementById('expiryMonth').addEventListener('input', formatMonth);
})


document.querySelector('.upiPayment').addEventListener('click',()=>{
  payment.innerHTML=`
          <div class="form-group">
              <label for="upiId">UPI ID</label>
              <input type="text" id="upiId" placeholder="9483829210@oksbi" required>
          </div>

          <div class="form-group">
              <label for="cardholderName">Account holder's Name</label>
              <input type="text" id="cardholderName" placeholder="Leo Das" required>
          </div>
          <button type="button" onclick="processUpiPayment()">Proceed With Payment </button>
      `;
});

function formatCardNumber() {
    const cardNumberInput = document.getElementById('cardNumber');
    let cardNumber = cardNumberInput.value.replace(/\D+/g, ''); // Remove spaces
    cardNumber = cardNumber.match(/.{1,4}/g)?.join(' ') || cardNumber; // Add space every 4 digits
    cardNumberInput.value = cardNumber;
}

function formatMonth() {
    let monthInput = document.getElementById('expiryMonth');
    let month = expMonth.value.replace(/\D/g, ''); // Remove non-digits
    month = month.match(/.{1,2}/g)?.join(' / ') || month; // Add space every 4 digits
    monthInput.value = month;
}



let cardNo = document.getElementById('cardNumber');
let expMonth = document.getElementById('expiryMonth');
let cvvNo =document.getElementById('cvv');
let holderName= document.getElementById('cardholderName');

function processPayment() {
    const cardNumber=cardNo.value;
    const expiryMonth = expMonth.value;
    const cvv = cvvNo.value;
    const cardholderName =holderName.value;

    if (validateCardNumber(cardNumber) && validateMonth(expiryMonth) && validateCVV(cvv) && cardholderName) {
        alert("Payment processed successfully!");
        cardNo.value=''; expMonth.value=""; cvvNo.value=''; holderName.value='';
    } else {
        alert("Please enter valid payment details.");
    } 
}

function processUpiPayment(){
    alert("Payment processed successfully!");
}

function validateCardNumber(number) {
    const regex = /^\d{4} \d{4} \d{4} \d{4}$/;
    return regex.test(number);
}

function validateMonth(month) {
    const regex =/^(0[1-9]|1[0-2]) \/ \d{2}$/;;
    return regex.test(month);
}


function validateCVV(cvv) {
    const regex = /^\d{3}$/;
    return regex.test(cvv);
}
