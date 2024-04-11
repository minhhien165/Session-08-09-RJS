"use strict";
function printValue(value) {
    console.log(value);
}
printValue("Hello");
printValue(10);
function printEmployee(person) {
    console.log(person.name);
    console.log(person.age);
    console.log(person.id);
    console.log(person.department);
}
const employee = {
    name: "Hiển",
    age: 30,
    id: 123,
    department: "IT",
};
printEmployee(employee);
// ==> Union Types cho phép xác định một kiểu dữ liệu có thể là một trong nhiều kiểu khác nhau,
// trong khi Intersection Types cho phép xác định một kiểu dữ liệu là sự kết hợp của nhiều kiểu khác nhau
