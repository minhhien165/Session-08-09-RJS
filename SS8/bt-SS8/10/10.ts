interface Person {
    name:string;
    age:number
}

interface Employee extends Person{
    employeeId:string;
}

const employee: Employee = {
    name: "Hiển",
    age: 19,
    employeeId: "123456",
  };
  
  console.log(employee);