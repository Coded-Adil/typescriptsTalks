// Enum in Typescript
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

// String Enum
enum ResponseStatus {
    Success = "SUCCESS",
    Failure = "FAILURE",
    Pending = "PENDING"
}

// const enum (more performant)
const enum HttpStatus {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404
}

function handleResponse(status: ResponseStatus) {
    if (status === ResponseStatus.Success) {
        console.log("Operation was successful!");
    }
}