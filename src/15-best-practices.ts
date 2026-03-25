// ✅ DO: Use strict mode
// In tsconfig.json: "strict": true

// ✅ DO: Prefer interfaces for object shapes
interface Developer {
  id: number;
  name: string;
  skills: string[];
}

const adilRahman: Developer = {
  id: 1,
  name: "Adil",
  skills: ["React", "TypeScript", "Next.js"],
};

// ✅ DO: Use type for unions and utility types
type Id = string | number;

// ✅ DO: Avoid 'any', use 'unknown' if type is truly unknown
function processVal(value: unknown): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}

// ✅ DO: Use const for values that won't change
const MAX_USERS = 100;

// ✅ DO: Use readonly for immutable properties
interface Config {
  readonly apiKey: string;
  readonly author: string;
}

const config: Config = {
  apiKey: "adil123",
  author: "Adil",
};

/* const config: Config = {
  apiKey: "adil123",
  author: "Adil",
};
*/
// config.apiKey = "newKey"; // Error: Cannot assign to 'apiKey' because it is a read-only property.
// Not among best practices ->>

// ❌ DON'T: Use 'any' unless absolutely necessary
// let data: any = fetchData(); // Bad

// ❌ DON'T: Ignore TypeScript errors
// @ts-ignore should be very rare