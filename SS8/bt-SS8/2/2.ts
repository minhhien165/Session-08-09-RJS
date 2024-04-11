function validatePerson(obj: any): boolean {
    return (
      typeof obj === "object" &&
      "name" in obj &&
      typeof obj.name === "string" &&
      "age" in obj &&
      typeof obj.age === "number" &&
      "address" in obj &&
      typeof obj.address === "object"
    );
}
const person1 = {
    name: "A",
    age: 30,
    address: { city: "A1" }
};

console.log(validatePerson(person1)); // Output: true

const person2 = {
  name: "B",
  age: "25",
  address: { city: "B1" }
};

console.log(validatePerson(person2)); // Output: false

const person3 = {
  name: "C",
  age: 35
};

console.log(validatePerson(person3)); // Output: false
  