class Person {
    constructor(age) {
        this.age = age; 
    }

    father(age) {

        this.age = age;
        document.getElementById("Father").innerHTML = `Father Age is : ${this.age}`;

    }

    child(age) {

        this.age = age;
        document.getElementById("child").innerHTML = `Child Age is : ${this.age}`;

    }
}

    var person = new Person();

    var fatherAge = 60;
    person.father(fatherAge);

    var childAge = 20;
    person.child(childAge);
    person.child(childAge);



