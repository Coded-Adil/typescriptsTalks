"use strict";
let updateTodo = {
    completed: true,
};
let newTodo = {
    title: "Learn TypeScript",
    description: "Learn about utility types in TypeScript",
    completed: false,
    createdAt: new Date(),
    assignTo: "Alice"
};
let readonlyTodo = {
    title: "Learn TypeScript",
    description: "Learn about utility types in TypeScript",
    completed: false,
    createdAt: new Date(),
    assignTo: "Alice"
};
let pages = {
    home: { title: "Home Page", url: "/home" },
    about: { title: "About Us", url: "/about" },
    contact: { title: "Contact Us", url: "/contact" },
};
// ReturnType -> get return type of function
function createUser() {
    return {
        id: 1,
        name: "Adil",
        email: "adilrszion@gmail.com"
    };
}
