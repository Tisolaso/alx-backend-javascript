// 1
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;
    [key: string]: any
}


const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };


console.log(teacher3);


// 2

interface Directors extends Teacher {
    numberOfReports: number
}


const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1);



// 3


interface printTeacherFunction {
    (firstName: string, lastName: string): void
}


const printTeacher:printTeacherFunction = (firstName, lastName)=> console.log(`${firstName.charAt(0)}. ${lastName}`)


// 4


interface StudentClassType {
    firstName: string
    lastName: string
    workOnHomework():string
    displayName():string
}


class StudentClass implements StudentClassType {
    firstName: string
    lastName: string

    constructor(firstName: string, lastName: string){
        this.firstName = firstName
        this.lastName = lastName
    }

    workOnHomework(){
        return "Currently working"
    }

    displayName(){
        return this.firstName
    }
}