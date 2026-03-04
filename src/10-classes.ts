class Person {
    // Properties
    private name: string;
    protected age: number; // Accessible in this class and subclasses
    public email: string;

    // Constructor
    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    // Method
    public introduce(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    // Getter
    public getName(): string {
        return this.name;
    }

    // Setter
    public setName(newName: string): void {
        this.name = newName;
    }
}

// Shorter way
class Employee {
    constructor(
        private id: number,
        public name: string, 
        protected department: string
    ) {}

    getDetails(): string {
        return `Employee ID: ${this.id}, Name: ${this.name}, Department: ${this.department}`;
    }
}

let jack = new Employee(1, "Jack", "Engineering");
console.log(jack.getDetails());