import { packages } from "./packagedetails";

let amountHtml = document.querySelector('.amount');
let taxHtml = document.querySelector('.tax');
let totalHtml = document.querySelector('.total');


let ids='holiday-package-dubai';
let amount='';
let tax='';
let total='';

packages.forEach((packages)=>{
  if(packages.id===ids){
    amount=packages.price;
    console.log(amount);
    amountHtml.textContent=amount;
    taxCalculation(amount);
    totalAmount(amount, tax);
  }
});

function taxCalculation(amount){
  tax=amount*(18/100);
  taxHtml.textContent=tax;  
}

function totalAmount(amount, tax){
  total=(amount+tax+20.22);
  totalHtml.textContent=total;
}