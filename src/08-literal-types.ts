// String literal types
let direction: 'north' | 'south' | 'east' | 'west';
direction = 'north'; 

// Numeric literal types
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

// Combining with other types
type SuccessResponse = {
    status: 'success';
    data: any;
};

type ErrorResponse = {
    status: 'error';
    message: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;