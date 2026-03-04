"use strict";
class Person {
    // Constructor
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    // Method
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    // Getter
    getName() {
        return this.name;
    }
    // Setter
    setName(newName) {
        this.name = newName;
    }
}
// Shorter way
class Employee {
    constructor(id, name, department) {
        this.id = id;
        this.name = name;
        this.department = department;
    }
    getDetails() {
        return `Employee ID: ${this.id}, Name: ${this.name}, Department: ${this.department}`;
    }
}
let jack = new Employee(1, "Jack", "Engineering");
console.log(jack.getDetails());
