let students = [
    {
        firstName: "chinmay",
        lastName: "deshpande",
        age: 12,
        skills: ["python", "javascript", "django"],
        city: "pune"
    },
    {
        firstName: "sarika",
        lastName: "pansare",
        age: 23,
        skills: ["python", "javascript", "cypress"],
        city: "mumbai"
    },
    {
        firstName: "amol",
        lastName: "rao",
        age: 25,
        skills: ["python", "html", "cypress"],
        city: "nagpur"
    },
    {
        firstName: "mayuri",
        lastName: "rao",
        age: 35,
        skills: ["testing", "html", "cypress"],
        city: "pune"
    }


]

// firstName of all students
console.log(students[1].firstName)
for (let i = 0; i < students.length; i++) {
    console.log(students[i].firstName)
}
// student with pune city
for (let i = 0; i < students.length; i++) {
    if (students[i].city === "pune") {
        console.log(students[i].firstName)
    }
}

//student in pune and age above 30
for(let i = 0 ; i < students.length ; i++){
    if(students[i].age > 30 && students[i].city === 'pune'){
        console.log(students[i].firstName)
    }
}

// add css skill to every student
for(let i = 0 ; i < students.length ; i++){
    students[i].skills.push("css")
}
console.log(students)

// name:numberofSkills
for(let i = 0 ; i < students.length ; i++){
    console.log(students[i].firstName + ":"+ students[i].skills.length)
}
// average age of all students
let a1 = students.reduce(function(acc,el){
        return el.age + acc
},0)
console.log(a1/students.length)