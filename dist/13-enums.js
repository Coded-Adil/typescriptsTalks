"use strict";
// Enum in Typescript
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
// String Enum
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus["Success"] = "SUCCESS";
    ResponseStatus["Failure"] = "FAILURE";
    ResponseStatus["Pending"] = "PENDING";
})(ResponseStatus || (ResponseStatus = {}));
function handleResponse(status) {
    if (status === ResponseStatus.Success) {
        console.log("Operation was successful!");
    }
}
