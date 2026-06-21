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
    greet:()=> string
}

let person:People={
    name:"Amaan",
    age:21,
    greet(){
        return "Hi " + person.name
    }
}

let greeting = person.greet()

console.log(greeting)


