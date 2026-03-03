// Union Types (OR)
type Status = "pending" | "approved" | "rejected"; // Types can also be used. Ex: string | number | boolean, etc.

function setStatus(status: Status) {
    console.log(`Status updated to: ${status}`);
}

setStatus("approved"); 

// Intersection Types (AND)
interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

type ColorfulCircle = Colorful & Circle;

let myCircle: ColorfulCircle = {
    color: "red",
    radius: 10
};