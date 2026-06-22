//similar to interfaces , types let you aggregate data 

type Employee={
    name:string;
    startDate:string;
};

type Manager={
    name:string;
    department:string;
};

type TeamLead = Employee & Manager;

let e: Employee={
    name:"amaan",
    startDate:"12-12-21"
}

let m : Manager={
    name:"rohan",
    department:"QA"
}

let t: TeamLead = {
    name:"harkirat",
    startDate:"12-12-12",
    department:"Software"
};

type GoodUser={
    name:string;
    gift:string;
};

type BadUser={
    name:string;
    ip:string;
};

type User = GoodUser | BadUser;

const user:User = {
    name:"amaan",
    gift:"asdasdas",
    ip:"aasdasd"
}

console.log(user)