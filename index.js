#! /usr/bin/env node
import inquirer from "inquirer";
let currentBalance = 10000;
console.log(`Your current Balance : ${currentBalance}`);
let pCode = 1234;
let received_pcode = await inquirer.prompt({
    name: "answer",
    message: "Please Enter Your correct Pin Code:",
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
    if (operation.selectedOperator === 'Withdraw') {
        let afterCurrentBalance = await inquirer.prompt({
            name: "nrAmount",
            message: "Enter or Select required amount",
            type: "list",
            choices: ["1000", "3000", "5000", "10000", "20000", "otherAmount"],
        });
        if (afterCurrentBalance.nrAmount != "otherAmount" && afterCurrentBalance.nrAmount <= currentBalance) {
            console.log(`Now your balance is: ${currentBalance - afterCurrentBalance.nrAmount}`);
        }
        else if (afterCurrentBalance.nrAmount == "otherAmount" && afterCurrentBalance.nrAmount <= currentBalance) {
            let typeAmount = await inquirer.prompt({
                name: "amountByType",
                message: "Enter your Amount",
                type: "number"
            });
            console.log(`Now your balance is: ${currentBalance - typeAmount.amountByType}`);
        }
        else {
            console.log("Insufficient Balance.");
        }
    }
}
else {
    console.log(`Incorrect Password, Please try again.`);
}
;
