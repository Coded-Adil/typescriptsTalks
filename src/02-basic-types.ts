// Primitives
let username: string = "Adil";
let age: number = 24;
let isAdmin: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["Adil", "Rahman"];

// Tuples
let person: [string, number] = ["Adil", 24];

// Enum 
enum Color {
    Red,
    Green,
    Blue
}

let favouriteColor: Color = Color.Blue

// Any (avoid when possible)
let randomValue: any = 10;
randomValue = "Adil";
randomValue = true;

// Unknown (Safer than any)
let userInput: unknown;
userInput = "Adil";
userInput = 24;

// Void (for functions that do not return)
function newPerson(name: string): void {
    console.log(name);
}

// Null and Undefiend 
let nullValue: null = null;
let undefinedValue: undefined = undefined;