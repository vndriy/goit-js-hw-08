export default function (v1, v2) {
    console.log(`Divide: ${v1 / v2}`);
}


export function add(value1, value2) {
    console.log(`Sum: ${value1 + value2}`);
}



export class User { 
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

export function  printName(user) {
    console.log(`User name is ${user.name}`);
};

export function printAge(user) {
    console.log(`User age is ${user.age}`);
};
