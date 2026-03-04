// // Type Assertion
// let someValue: unknown = "This is a string";
// let strLength: number = (someValue as string).length;
// // Or
// let strLength2: number = (<string>someValue).length;

// // Type Guard
// function processValue(value: string | number) {
//     if (typeof value === 'string') {
//         console.log("String value: " + value.toUpperCase());
//     } else {
//         console.log("Number value: " + (value.toFixed(2)));
//     }
// }

// processValue("hello");

// // intenceof type guard
// class Dog {
//     bark(): void {
//         console.log("Woof!");
//     }
// }

// class Cat {
//     meow(): void {
//         console.log("Meow!");
//     }
// }

// function makeSound(animal: Dog | Cat) {
//     if (animal instanceof Dog) {
//         animal.bark();
//     } else {
//         animal.meow();
//     }
// };
