
type UserType = {
    firstName: string,
    lastName: string,
    age: number,
    address:{
        city:string,
        country:string
    }
}

let user:UserType = {
    firstName:"Amaan",
    lastName:"Shikalgar",
    age:21,
    address:{
        city: "Sangli",
        country: "India"
    }
}

const greet = (user:UserType)=>{
    console.log( "Hi " + user.firstName , user.lastName)
    console.log( "His age is " + user.age)
    console.log("He lives in " + user.address.city , user.address.country)
}

greet(user)


interface User {
    name:string,
    age: number
}

let customer: User = {
    name:"amaan",
    age:21
}