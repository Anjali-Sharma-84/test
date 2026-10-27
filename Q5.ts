// Q5. Generic Function

function getStudentInfo<T>(info: T): T {
    return info;
}

console.log(getStudentInfo<string>("Anjali"));
console.log(getStudentInfo<number>(101));
console.log(getStudentInfo<string>("A Grade"));