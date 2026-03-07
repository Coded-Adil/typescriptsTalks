"use strict";
// Generics in Typescript
function identity(arg) {
    return arg;
}
let output1 = identity("myString"); // type of output will be 'string'
let output2 = identity(123); // type of output will be 'number'
// Generic Type with Array
function getFirstElement(arr) {
    return arr[0];
}
let myNum = getFirstElement([1, 2, 3]); // type of myNum will be 'number'
let myStr = getFirstElement(["a", "b", "c"]); // type of myStr will be 'string'
let stringNumberPair = {
    key: {
        name: "Alice",
        myKey: "age"
    },
    value: 30
};
// Generic Class
