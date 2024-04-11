// Union Types
type MyUnionType = string | number;

function printValue(value: MyUnionType): void {
  console.log(value);
}

printValue("Hello");
printValue(10);

// Intersection Types
type Person = {
    name: string;
    age: number;
};

type Employee = {
  id: number;
  department: string;
};

type EmployeePerson = Person & Employee;

function printEmployee(person: EmployeePerson): void {
  console.log(person.name);
  console.log(person.age);
  console.log(person.id);
  console.log(person.department);
}

const employee: EmployeePerson = {
  name: "Hiển",
  age: 30,
  id: 123,
  department: "IT",
};
  
printEmployee(employee);
  
// ==> Union Types cho phép xác định một kiểu dữ liệu có thể là một trong nhiều kiểu khác nhau,
// trong khi Intersection Types cho phép xác định một kiểu dữ liệu là sự kết hợp của nhiều kiểu khác nhau