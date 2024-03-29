#! /usr/bin/env node
import inquirer from "inquirer";
let currentBalance = 10000;
let pCode = 1234;
let received_pwsCode = await inquirer.prompt({
    name: "answer",
    message: "Please Enter Your correct Pin Code:",
    type: "number"
});
if (received_pwsCode.answer === pCode) {
    console.log(`Your Pin Code in Correct`);
    console.log(`Your current Balance : ${currentBalance}`);
    let operation = await inquirer.prompt({
        name: "selectedOperator",
        message: "What do you want?",
        type: "list",
        choices: ["Withdraw", "Balance", "Eject Your Card"]
    });
    if (operation.selectedOperator === 'Withdraw') {
        let afterCurrentBalance = await inquirer.prompt({
            name: "nrAmount",
            message: "Enter or Select required amount",
            type: "list",
            choices: ["1000", "3000", "5000", "10000", "20000", "otherAmount"],
        });
        let selectedAmount = afterCurrentBalance.nrAmount;
        if (selectedAmount != "otherAmount" && selectedAmount <= currentBalance) {
            console.log(`Now your balance is: ${currentBalance - afterCurrentBalance.nrAmount}`);
            console.log(`Thank you for Using my ATM matchine.`);
        }
        else if (selectedAmount === "otherAmount") {
            let typeAmount = await inquirer.prompt({
                name: "amountByType",
                message: "Enter your Amount:",
                type: "number",
            });
            let inputSelectedAmount = typeAmount.amountByType;
            if (inputSelectedAmount <= currentBalance) {
                console.log(`Now your balance is: ${currentBalance - typeAmount.amountByType}`);
                console.log(`Thank you for Using my ATM matchine.`);
            }
            else {
                console.log("Insufficient Balance.");
                console.log(`Thank you for Using my ATM matchine.`);
            }
            ;
        }
        else { }
    }
    else if (operation.selectedOperator === 'Balance') {
        console.log(currentBalance);
        console.log(`Thank you for Using my ATM matchine.`);
    }
    else {
        console.log(`Thank you for Using my ATM matchine.`);
    }
}
else {
    console.log(`Incorrect Password, Please try again.`);
    console.log(`Thank you for Using my ATM matchine.`);
}
;
