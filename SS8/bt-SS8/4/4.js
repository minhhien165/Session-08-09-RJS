"use strict";
function square4(input) {
    if (typeof input === 'number') {
        return input ** 2;
    }
    else if (Array.isArray(input)) {
        return input.map((num) => num ** 2);
    }
    else {
        throw new Error('Invalid input');
    }
}
console.log(square4(5));
console.log(square4([1, 2, 3]));
