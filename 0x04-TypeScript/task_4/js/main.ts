/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />

export const cpp = new Subjects.Cpp({
  firstName: "test",
  lastName: "test",
});

export const java = new Subjects.Java({
  firstName: "test",
  lastName: "test",
  experienceTeachingJava: 5,
});

export const react = new Subjects.React({
  firstName: "test",
  lastName: "test",
  experienceTeachingReact: 2,
});

export const cTeacher: Subjects.Teacher = {
  firstName: "test",
  lastName: "test",
  experienceTeachingC: 10,
};

console.log("c++");
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("java");
java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("react");
react.setTeacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
