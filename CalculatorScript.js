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

let testNum1 = parseInt(prompt("Enter number 1","0"));
let testNum2 = parseInt(prompt("Enter number 2","0"));

console.log(division(testNum1,testNum2))