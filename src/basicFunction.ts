function sum(a:number,b:number):number {
    return a+b
}

const sum2 = (a:number,b:number):number =>{
    return a+b
}

const isEven = (num:number):boolean =>{
    if(num %  2 == 0){
        return true
    }else return false
}

const greet = (name: string):string=>{
    return "Hello " + name
}


console.log(sum(1,2))
console.log(sum2(1,2))
console.log(isEven(2))
console.log(greet("amaan"))