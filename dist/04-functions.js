"use strict";
// Every Function related types
// Basic Function 
function add(a, b) {
    return a + b;
}
;
// Optional Parameters
function greet(name, greeting) {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
}
;
// Default Parameters
function multiply(a, b = 1) {
    return a * b;
}
;
// Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
;
// Arrow Functions
const divide = (a, b) => a / b;
// Function Types
let calculate;
calculate = add;
