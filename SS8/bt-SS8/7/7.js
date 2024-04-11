"use strict";
function printDataType(data) {
    if (typeof data === 'number') {
        console.log('Number');
    }
    else if (Array.isArray(data)) {
        console.log('Array');
    }
    else if (typeof data === 'object') {
        console.log('Object');
    }
    else {
        console.log('Unknown');
    }
}
printDataType(10);
printDataType([1, 2, 3]);
printDataType({ name: 'Hiển', age: 19 });
printDataType('Hello');
