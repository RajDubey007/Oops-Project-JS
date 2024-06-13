class School {
    students(name, contact, age , email) {
        

        document.getElementById("sn").innerHTML += `Student name is :- ${name}<br> `;
        document.getElementById("sc").innerHTML += `Student contact no is :- ${contact}<br>`;
        document.getElementById("sa").innerHTML += `Student age is :- ${age}<br>`;
        document.getElementById("se").innerHTML += `Student email is :- ${email}<br>`;
        
    }   

    faculty(name, contact, age , email) {
      
        document.getElementById("fn").innerHTML += `Faculty name is :- ${name}<br>`;
        document.getElementById("fc").innerHTML += `Faculty contact no is:- ${contact}<br>`;
        document.getElementById("fa").innerHTML += `Faculty age is :- ${age}<br>`;
        document.getElementById("fe").innerHTML += `Faculty email is :- ${email}<br>`;

    }

    
    peon(name, contact, age , email) {

        document.getElementById("pn").innerHTML += ` Peon name is :- ${name}<br>`;
        document.getElementById("pc").innerHTML += ` Peon contact no is :- ${contact}<br>`;
        document.getElementById("pa").innerHTML += ` Peon age is :- ${age}<br>`;
        document.getElementById("pe").innerHTML += ` Peon email is :- ${email}<br>`;

    }

}

let school = new School();

school.students("Madhav", 7984175615, 20, " Madhav3228@gmail.com");

school.faculty("keyur", 56475284716, 25 , "keyur@gmail.com");

school.peon("Rajesh", 8980770091, 23 , "Rajesh078@gmail.com");

