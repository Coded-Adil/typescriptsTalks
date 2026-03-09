interface Todo {
    title: string;
    description?: string;
    completed?: boolean;
    createdAt: Date;
    assignTo: string;
}

// Partial -> makes all properties optional
type PartialTodo = Partial<Todo>;

let updateTodo: PartialTodo = {
    completed: true,
}

// Required -> makes all properties required
type RequiredTodo = Required<Todo>;

let newTodo: RequiredTodo = {
    title: "Learn TypeScript",
    description: "Learn about utility types in TypeScript",
    completed: false,
    createdAt: new Date(),
    assignTo: "Alice"
}

// Readonly -> makes all properties read-only
type ReadonlyTodo = Readonly<Todo>;

let readonlyTodo: ReadonlyTodo = {
    title: "Learn TypeScript",
    description: "Learn about utility types in TypeScript",
    completed: false,
    createdAt: new Date(),
    assignTo: "Alice"
};

// readonlyTodo.completed = true; 

// Pick -> creates a new type by picking a set of properties from an existing type
type TodoPreview = Pick<Todo, "title" | "completed">;

// Omit -> omit specific properties
type TodoWithoutDescription = Omit<Todo, "description">;

// Record -> construct object type with specific keys and value type
type PageInfo = {
    title: string;
    url: string
}

type Pages = "home" | "about" | "contact";

type Marged = Record<Pages, PageInfo>

let pages: Marged = {
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
    }
}

type UserType = ReturnType<typeof createUser>;