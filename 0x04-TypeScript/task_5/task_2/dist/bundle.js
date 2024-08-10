/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("\nclass Director {\n    workFromHome() {\n        return \"Working from home\";\n    }\n    getCoffeeBreak() {\n        return \"Getting a coffee break\";\n    }\n    workDirectorTasks() {\n        return \"Getting to director tasks\";\n    }\n}\nclass Teacher {\n    workFromHome() {\n        return \"Cannot work from home\";\n    }\n    getCoffeeBreak() {\n        return \"Cannot have a break\";\n    }\n    workTeacherTasks() {\n        return \"Getting to work\";\n    }\n}\nfunction createEmployee(salary) {\n    const salaryNum = typeof salary === \"number\" ? salary : +salary.slice(1);\n    if (salaryNum < 500)\n        return new Teacher();\n    else {\n        return new Director();\n    }\n}\nconsole.log(createEmployee(200));\nconsole.log(createEmployee(1000));\nconsole.log(createEmployee('$500'));\n// 6\nfunction isDirector(employee) {\n    return employee instanceof Director;\n}\nfunction executeWork(employee) {\n    if (isDirector(employee))\n        return employee.workDirectorTasks();\n    else\n        return employee.workTeacherTasks();\n}\nconsole.log(executeWork(createEmployee(200)));\nconsole.log(executeWork(createEmployee(1000)));\nfunction teachClass(todayClass) {\n    if (todayClass === \"Math\")\n        return \"Teaching Math\";\n    else\n        return \"Teaching History\";\n}\nconsole.log(teachClass(\"Math\"));\nconsole.log(teachClass(\"History\"));\n\n\n//# sourceURL=webpack://task_0/./js/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;