

class Employees{
    constructor (fname , lname , age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
}

let Detail = new Employees ("Rahul" , "Jain" , 22);

document.querySelector (".emp").innerHTML = `Employees Detail <br/> <br/> Frist name : ${Detail.fname} <br> Last name : ${Detail.lname} <br/> age : ${Detail.age}`;
