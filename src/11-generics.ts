// Generics in Typescript
function identity<MyType>(arg: MyType): MyType {
    return arg;
}

let output1 = identity<string>("myString"); // type of output will be 'string'
let output2 = identity<number>(123); // type of output will be 'number'

// Generic Type with Array
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

let myNum = getFirstElement([1, 2, 3]); // type of myNum will be 'number'
let myStr = getFirstElement(["a", "b", "c"]); // type of myStr will be 'string'

// Generic Interface
interface KeyValuePair<K, V> {
    key: {
        name: string,
        myKey: K
    };
    value: V;
}

let stringNumberPair: KeyValuePair<string, number> = { 
    key: {
        name: "Alice",
        myKey: "age"
    },
    value: 30
};

// Generic Class