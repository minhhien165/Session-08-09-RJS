function obj(obj1:object, obj2:object):object{
    return {...obj1, ...obj2}
}

type Person ={
    name: string;
    age: number;
}

type Address ={
    city: string;
    country: string;
}

const person: Person = { name: "Hiển", age: 19 };
const address: Address = { city: "HD", country: "VN" };

console.log(obj(person,address));