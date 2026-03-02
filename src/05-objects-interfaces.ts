// Interface
interface User{
    name: string;
    age: number;
    email?: string; // Optional property
    readonly id: number; // Readonly property
}


// Object type annotations
let user: User = {
    name: "Alice",
    age: 30,
    id: 1
};

// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

interface Product {
    name: string;
    price: number;
    getDiscount(percentage: number): number;
}

let laptop: Product = {
    name: "Laptop",
    price: 1000,
    getDiscount(percentage: number): number {
        return this.price * (percentage / 100);
    },
};