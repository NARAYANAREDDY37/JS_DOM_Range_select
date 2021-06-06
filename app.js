//Range select

//format number
let formatNumber = (number) =>{
  let result = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number);
  return result;
};


let RangeEl = document.querySelector('#range');
let amountEl = document.querySelector('#amount');

RangeEl.addEventListener('change', function(){
  selectedAmount = RangeEl.value;
  amountEl.innerText = formatNumber(selectedAmount);
});