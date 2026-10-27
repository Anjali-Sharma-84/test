// Q2. Student Class

class Student {
    name: string;
    studentId: number;
    grade: string;
    address: string;

    constructor(name: string, studentId: number, grade: string, address: string) {
        this.name = name;
        this.studentId = studentId;
        this.grade = grade;
        this.address = address;
    }

    displayInfo(): void {
        console.log(this.name, this.studentId, this.grade, this.address);
    }
}

const s1 = new Student("Anjali", 101, "A", "Mumbai");
s1.displayInfo();