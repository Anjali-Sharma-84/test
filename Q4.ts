abstract class Person {
    abstract getDetails(): string;
    abstract getRole(): string;
}

class Student extends Person {
    getDetails(): string {
        return "Name: Anjali, ID: 101";
    }

    getRole(): string {
        return "Student";
    }
}

class Teacher extends Person {
    getDetails(): string {
        return "Name: Rahul, Subject: Java";
    }

    getRole(): string {
        return "Teacher";
    }
}

const student = new Student();
console.log(student.getDetails(), student.getRole());

const teacher = new Teacher();
console.log(teacher.getDetails(), teacher.getRole());