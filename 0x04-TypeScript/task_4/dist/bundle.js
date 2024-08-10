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
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.cTeacher = exports.react = exports.java = exports.cpp = void 0;\nexports.cpp = new Subjects.Cpp({\n    firstName: \"test\",\n    lastName: \"test\",\n});\nexports.java = new Subjects.Java({\n    firstName: \"test\",\n    lastName: \"test\",\n    experienceTeachingJava: 5,\n});\nexports.react = new Subjects.React({\n    firstName: \"test\",\n    lastName: \"test\",\n    experienceTeachingReact: 2,\n});\nexports.cTeacher = {\n    firstName: \"test\",\n    lastName: \"test\",\n    experienceTeachingC: 10,\n};\nconsole.log(\"c++\");\nexports.cpp.setTeacher = exports.cTeacher;\nconsole.log(exports.cpp.getRequirements());\nconsole.log(exports.cpp.getAvailableTeacher());\nconsole.log(\"java\");\nexports.java.setTeacher = exports.cTeacher;\nconsole.log(exports.java.getRequirements());\nconsole.log(exports.java.getAvailableTeacher());\nconsole.log(\"react\");\nexports.react.setTeacher = exports.cTeacher;\nconsole.log(exports.react.getRequirements());\nconsole.log(exports.react.getAvailableTeacher());\n\n\n//# sourceURL=webpack://task_0/./js/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;