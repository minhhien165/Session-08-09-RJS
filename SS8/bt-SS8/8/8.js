"use strict";
function obj(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const person = { name: "Hiển", age: 19 };
const address = { city: "HD", country: "VN" };
console.log(obj(person, address));
