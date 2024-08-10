interface Student {
    firstName: string, lastName: string, age:number, location:string
}



const student1 = {firstName: "Youssef", lastName: "sss", age:50, location:"Morocco"}
const student2 = {firstName: "Youssef", lastName: "sss", age:55, location:"Morocco"}

const studentsList = [student1, student2]

const result = studentsList.map((student)=> [student.firstName, student.location])


console.log(result);
console.log("No type errors found");