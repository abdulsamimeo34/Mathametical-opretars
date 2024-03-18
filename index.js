"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answers = await inquirer_1.default.prompt([
    {
        type: "number",
        name: "numberone",
        message: "kindily enter your first no:"
    },
    {
        type: "number",
        name: "numbertwo",
        message: "kindily enter your second no:"
    },
    {
        type: "list",
        name: "operator",
        choices: ["*", "+", "-", "/"],
        message: "select operator:"
    },
]);
console.log(answers);
