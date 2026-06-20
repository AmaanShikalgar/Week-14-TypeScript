const greet = (user:{
    name: string,
    age: number,
    address:{
        city: string,
        country: string
    }
})=>{
    console.log( "Hi " + user.name)
    console.log( "His age is " + user.age)
    console.log("He lives in " + user.address.city , user.address.country)
}

let user = {
    name:"amaan",
    age:21,
    address:{
        city: "Sangli",
        country: "India"
    }
}

greet(user)