interface DirectorInterface {
    workFromHome():string
    getCoffeeBreak():string
    workDirectorTasks():string
}


interface TeacherInterface extends Omit<DirectorInterface, 'workDirectorTasks'> {
    workTeacherTasks():string
}

class Director implements DirectorInterface {
    workFromHome(){
return "Working from home"
    } 

    getCoffeeBreak(){
return "Getting a coffee break"
    } 
    workDirectorTasks() {
       return "Getting to director tasks"
    }
}

class Teacher implements TeacherInterface{
    workFromHome(){
        return "Cannot work from home"
    }

    getCoffeeBreak(){
        return "Cannot have a break"
    }

    workTeacherTasks(){
        return "Getting to work"
    }
}


function createEmployee (salary:number | string): DirectorInterface |  TeacherInterface{

    const salaryNum = typeof salary === "number" ? salary : +salary.slice(1)

    if (salaryNum < 500) return new Teacher()
    else{
        return new Director()
    }
}



console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));


// 6

function isDirector(employee: DirectorInterface |  TeacherInterface){
    return employee instanceof Director
}


function executeWork(employee: DirectorInterface |  TeacherInterface){
    if (isDirector(employee)) return employee.workDirectorTasks()
    else return employee.workTeacherTasks()
}



console.log(executeWork(createEmployee(200)));

console.log(executeWork(createEmployee(1000)));


// 7

type Subjects = "Math" | "History"


function teachClass(todayClass: Subjects){
       if (todayClass === "Math") return "Teaching Math"
       else return "Teaching History"
}



console.log(teachClass("Math"));
console.log(teachClass("History"));

