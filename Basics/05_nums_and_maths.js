const  balance =new Number(100)
console.log(balance); // output is [Number: 100]

console.log(balance.toString()); // output is 100
console.log(balance.toString().length); // output is 3
console.log(balance.toFixed(1));// demical digit 1 100.0

const othernumber=23.98772891
console.log(othernumber.toPrecision(4)); // output is 23.99
console.log(othernumber.toPrecision(3)); // output is 24.0

const hundreds=10000000
console.log(hundreds.toLocaleString('en-IN')); // converts into Indian currency form 1,00,00,000

// +++++++++++++++++++++++++++Maths++++++++++++++++++++

console.log(Math); // Math class is Object
console.log(Math.abs(-7685)); // Converts negative to Positive value
console.log(Math.round(7.5)); // round off the value 
console.log(Math.ceil(4.3)); //  ceil just convert the small value to its next higher value works only decimal value 
console.log(Math.floor(5.9)); // floor just convert the higher value to its previous lower value

//  Very Important Random function

console.log(Math.random());//  0.7627818718350869 always generate random value 
console.log((Math.random()*10)+1); // to increase the decimal place and not generate 0 
console.log(Math.floor(Math.random() *10000)+1); // floor just used to get non decimal value

const min=10;
const max=20;

console.log(Math.floor(Math.random() * (max-min+1))+min); // when we have to decide what should be the range of the randomly generated value



 












