// Q3. School Class

class School {
    static totalStudents: number = 0;
    studentList: Student[] = [];

    addStudent(student: Student): void {
        this.studentList.push(student);
        School.totalStudents++;
    }

    displayStudents(): void {
        console.log(this.studentList);
        console.log("Total Students:", School.totalStudents);
    }
}

const school = new School();

school.addStudent(new Student("Anjali", 101, "A", "Mumbai"));
school.addStudent(new Student("Rahul", 102, "B", "Pune"));

school.displayStudents();