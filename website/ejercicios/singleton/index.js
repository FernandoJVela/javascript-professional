"use strict";
exports.__esModule = true;
var singleton_1 = require("./singleton");
var a = singleton_1["default"].getInstance();
var b = singleton_1["default"].getInstance();
console.log('A es igual a B? ', a === b);
