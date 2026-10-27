// Q17. Total Marks of All Students

let students = [
    { name: "Anjali", marks: 90 },
    { name: "Rahul", marks: 75 },
    { name: "Priya", marks: 85 },
    { name: "Amit", marks: 60 }
];

let totalMarks = students.reduce(function(total, student) {
    return total + student.marks;
}, 0);

console.log("Total Marks:", totalMarks);