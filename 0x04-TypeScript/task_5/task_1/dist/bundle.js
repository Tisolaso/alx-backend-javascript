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

eval("\nconst teacher3 = {\n    firstName: 'John',\n    fullTimeEmployee: false,\n    lastName: 'Doe',\n    location: 'London',\n    contract: false,\n};\nconsole.log(teacher3);\nconst director1 = {\n    firstName: 'John',\n    lastName: 'Doe',\n    location: 'London',\n    fullTimeEmployee: true,\n    numberOfReports: 17,\n};\nconsole.log(director1);\nconst printTeacher = (firstName, lastName) => console.log(`${firstName.charAt(0)}. ${lastName}`);\nclass StudentClass {\n    constructor(firstName, lastName) {\n        this.firstName = firstName;\n        this.lastName = lastName;\n    }\n    workOnHomework() {\n        return \"Currently working\";\n    }\n    displayName() {\n        return this.firstName;\n    }\n}\n\n\n//# sourceURL=webpack://task_0/./js/main.ts?");

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