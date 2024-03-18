import inquirer from "inquirer";

const  answers: {
    numberone: number,
    numbertwo:Number,
    operator:string,
} =  await    inquirer.prompt ([
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
        choices: ["*","+","-","/"],
        message: "select operator:" 
    },
])

console.log(answers);