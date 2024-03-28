#! /usr/bin/env node
import inquirer from "inquirer";
let currentBalance = 10000;
console.log(`Your current Balance : ${currentBalance}`);
let pCode = 1234;
let received_pcode = await inquirer.prompt({
    name: "answer",
    message: "Please Enter Your correct Pin Code",
    type: "number"
});
if (received_pcode.answer === pCode) {
    console.log(`Your Pin Code in Correct`);
    let operation = await inquirer.prompt({
        name: "selectedOperator",
        message: "What do you want?",
        type: "list",
        choices: ["Withdraw", "Balance"]
    });
}
else {
    console.log(`Incorrect Pasword, Please try again.`);
}
