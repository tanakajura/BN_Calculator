function addition(num1, num2){
    let ans = num1 + num2;
    return ans;
}

function subtraction(num1, num2){
    let ans = num1 - num2;
    return ans;
}

function multiplication(num1, num2){
    let ans = num1 * num2;
    return ans;
}

function division(num1, num2){
    let ans = num1 / num2;
    return ans;
}

function operate(num1, operator, num2){
    let ans = 0;
    switch(operator){
        case "+":
            ans = addition(num1,num2);
            return ans;
        case "-":
            ans = subtraction(num1,num2);
            return ans;
        case "*":
            ans = multiplication(num1,num2);
            return ans;
        case "/":
            ans = division(num1,num2);
            return ans;
    }
}


let testNum1 = parseInt(prompt("Enter number 1","0"));
let testOperator = prompt("Enter Operator plus: \"+\" minus: \"-\" multiply: \"*\" or divide: \"-\""," ");
let testNum2 = parseInt(prompt("Enter number 2","0"));

 
console.log(operate(testNum1,testOperator,testNum2));