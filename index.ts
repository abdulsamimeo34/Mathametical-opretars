import { log } from "console";
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstnumber" },
  { message: "Enter second number", type: "number", name: "secondnumber" },
  {
    message: "select one of the operators to perform action",
    type: "list",
    name: "opretor",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// conditional statement
if (answer.opretor === "Addition") {
  console.log( + answer.firstnumber + answer.secondnumber);
} else if (answer.opretor === 'subtraction') {
  console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.opretor === 'multipilication') {
  console.log(answer.firstnumber * answer.secondnumber)
} else if (answer.opretor === 'division') {
  console.log(answer.firstnumber / answer.secondnumber);
} else{
  ('please select valid opretar');
}

 
