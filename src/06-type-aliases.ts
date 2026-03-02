// Type alias
type Point = {
    x: number;
    y: number;
};

let point: Point = { x: 10, y: 20 };

// Type alias for primitives
type ID = number | string;

let userId: ID = "alias123";
let productId: ID = 456;


// Type alias vs Interface

// Interfaces can be extended and implemented, while type aliases cannot.
interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

// let myDog: Dog = {
//     name: "Buddy",
//     breed: "Golden Retriever"
// };


// Interfaces can be declared multiple times and will be merged, while type aliases cannot.
interface Animal {
    age: number;
}

let myDog: Dog = {
    name: "Buddy",
    breed: "Golden Retriever",
    age: 5
};

// Use Interface for object shapes,
// Type alias for unions / intersections / primitives.

interface User {
    name: string;
    age: number;
}

type UserID = number | string;