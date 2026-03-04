"use strict";
// Type Assertion
let someValue = "This is a string";
let strLength = someValue.length;
// Or
let strLength2 = someValue.length;
// Type Guard
function processValue(value) {
    if (typeof value === 'string') {
        console.log("String value: " + value.toUpperCase());
    }
    else {
        console.log("Number value: " + (value.toFixed(2)));
    }
}
processValue("hello");
// intenceof type guard
class Dog {
    bark() {
        console.log("Woof!");
    }
}
class Cat {
    meow() {
        console.log("Meow!");
    }
}
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
;
