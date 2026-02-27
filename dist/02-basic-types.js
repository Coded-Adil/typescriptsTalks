"use strict";
// Primitives
let username = "Adil";
let age = 24;
let isAdmin = true;
// Arrays
let numbers = [1, 2, 3, 4];
let names = ["Adil", "Rahman"];
// Tuples
let person = ["Adil", 24];
// Enum 
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let favouriteColor = Color.Blue;
// Any (avoid when possible)
let randomValue = 10;
randomValue = "Adil";
randomValue = true;
// Unknown (Safer than any)
let userInput;
userInput = "Adil";
userInput = 24;
// Void (for functions that do not return)
function newPerson(name) {
    console.log(name);
}
// Null and Undefiend 
let nullValue = null;
let undefinedValue = undefined;
