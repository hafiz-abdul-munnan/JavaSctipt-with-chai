// Primitive DT

// String
let str = "Any type of data wrap to single or double quotes";
// Number
let num = 123456786;
// Boolean
let trfl = true; // base on 0/1
// null
let nl = null; // data type is object
// undefined
let und = undefined;
// Symbol
let sym = Symbol('123456789'); // every symbol separate with any symbol
// Bigint
let big = 123456789987654321n

let array = [str, num, trfl, nl, und, sym, big]
console.table(typeof (array));


// https://262.ecma-international.org/5.1/#sec-11.4.3


// Non-Primitive / Refrence DT
// Array [], Object (), Function (){}

let arr = ["Hafiz", 123, a = () => { }, "Abdul Munnan", 123.321];
let obj = {
    name: "Company Name",
    age: 25,
    roll: "owner",
    email: "demo@gmail.com"
}
function nonPrimitive() {

}