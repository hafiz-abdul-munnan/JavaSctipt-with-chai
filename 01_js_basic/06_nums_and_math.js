const score = 10050;

const numbers = new Number(102030);

// console.log(numbers.toExponential());
// console.log(numbers.toFixed(2));
// console.log(numbers.toLocaleString('en-PK'));

let otherNumber = 123456.123;
// console.log(otherNumber.toPrecision(5));
// console.log(numbers.toPrecision(20));
// console.log(numbers.valueOf(numbers));

//  =====================================================================

// just nagetive value ko positive karny kay leeian 
// console.log(Math.abs(-numbers));

// console.log(Math.round(987654.31));
// console.log(Math.ceil(123.4));
// console.log(Math.floor(123.4));
// console.log(Math.min());

// ye 0 or 1 kay dermeeian value deta hen 
// console.log(Math.random());

// console.log((Math.random() * 10) + 1);
// console.log(Math.floor((Math.random() * 10) + 1));

// Jab Min or Max Value par kam karna ho ya nikalni ho 
let min = 10;
let max = 30;

console.log(Math.floor((Math.random() * (max - min + 1)) + min));