// Q16. Filter Students with Marks Greater Than 80

let students = [
    { name: "Anjali", marks: 90 },
    { name: "Rahul", marks: 75 },
    { name: "Priya", marks: 85 },
    { name: "Amit", marks: 60 }
];

let result = students.filter(function(student) {
    return student.marks > 80;
});

console.log(result);