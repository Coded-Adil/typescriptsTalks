"use strict";
// Object type annotations
let user = {
    name: "Alice",
    age: 30,
    id: 1
};
let laptop = {
    name: "Laptop",
    price: 1000,
    getDiscount(percentage) {
        return this.price * (percentage / 100);
    },
};
