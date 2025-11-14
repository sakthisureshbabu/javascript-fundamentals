let students = [
    {
        firstName: "Chinmay",
        lastName: "deshpande",
        age: 34,
        skills: ["python", "javaScript", "Node.js"]
    },
    {
        firstName: "Amul",
        lastName: "Rao",
        age: 33,
        skills: ["python", "javaScript", "Node.js"]
    },
    {
        firstName: "Chinmay",
        lastName: "deshpande",
        age: 34,
        skills: ["python", "javaScript", "Oracle", "C#"]
    },
    {
        firstName: "Sarika",
        lastName: "Pansare",
        age: 23,
        skills: ["python", "java", "sql"]
    },
    {
        firstName: "mayuri",
        lastName: "joshi",
        age: 33,
        skills: ["java", "html", "Angular"]
    }
];

const shortList_1 = students.filter(student => student.age >= 25);
console.log(shortList_1);


students.forEach(student => {
    console.log(student.firstName,':',student.skills.length);
});

// Average age
const allAges = students.reduce((acc, student) => acc + student.age, 0);
console.log(allAges/students.length);