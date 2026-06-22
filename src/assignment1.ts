//interfaces vs types
//create two types called User and Admin
//create a function that takes either a user or admin as an input , and return a string saying "welcome, [name]"

interface User {
    name:string;
    age:number;
}

interface Admin{
    name:string;
    permissions:String;
}

type UserOrAdmin = User | Admin;

function greet(user:User|Admin){
    console.log("Hi " + user.name)
}

let u : User = {
    name:"Amaan",
    age:21
}

let a : Admin = {
    name:"Rohan",
    permissions:"login"
}

greet(a)
