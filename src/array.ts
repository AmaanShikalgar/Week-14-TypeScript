function getMax(nums:number[]):number{
    let maxValue = Number.NEGATIVE_INFINITY;

    for(const num of nums){
        if(num>maxValue){
            maxValue = num;
        }
    }
    return maxValue;
}

console.log(getMax([1,2,3]))

interface User{
    firstName: string;
    lastName:string;
    age:number;
}

function filterUser(users:User[]){
    let ans =[]
    for (const user of users){
        if(user.age>18){
            ans.push(user)
        }
    }
    return ans;
}

const filteredUsers = filterUser([{
    firstName:"Amaan",
    lastName:"Shikalgar",
    age:21
},{
    firstName:"Rohan",
    lastName:"Borse",
    age:12
},{
    firstName:"Ishaan",
    lastName:"Deshpande",
    age:20
}
]);

console.log(filteredUsers);