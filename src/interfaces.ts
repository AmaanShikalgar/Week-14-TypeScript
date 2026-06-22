interface Address{
        city: string,
        country: string,
        pincode: number
}

interface User{
    firstName:string,
    lastName:string,
    age:number,
    address?:Address
}

interface Office{
    address:Address
}

let user1:User = {
    firstName:"Amaan",
    lastName:"Shikalgar",
    age:23,
    address:{
        city: "Sangli",
        country: "India",
        pincode: 416416
    }
}

let user2:User = {
    firstName:"Rohan",
    lastName:"Borse",
    age:17
}

function isLegal(user:User):string{
    if(user.age <18){
        return user.firstName + " is minor"
    } else return user.firstName + " is Adult"
}

console.log(isLegal(user1))
console.log(isLegal(user2))

interface People{
    name:string,
    age:number,
    // greet:()=> string
}

let person:People={
    name:"Amaan",
    age:21,
    // greet(){
    //     return "Hi " + person.name
    // }
}

// let greeting = person.greet()

// console.log(greeting)

class Manager implements People{
    name:string;
    age:number;
    number: number;
    
    constructor(name:string,age:number,number:number){
        this.name = name;
        this.age = age;
        this.number = number;
    }
}

let manager1 = new Manager("Amaan",23,9)

console.log(manager1.name,manager1.number)

class Shape {
    area(){
        console.log("Hi i am area")
    }
}

class Rectangle extends Shape{
    width: number;
    height: number;

    constructor(width:number,height:number){
        super()
        this.width =width;
        this.height=height;
    };
}

const rect = new Rectangle(1,2);
rect.area();