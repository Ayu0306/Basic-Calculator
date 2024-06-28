var num1;
var num2;
var operator;

function add(num1, num2){
    var sum = parseInt(num1) + parseInt(num2);
    return sum;
}

function multiply(num1, num2){
    var sum = parseInt(num1) * parseInt(num2);
    return sum;
}

function subtract(num1, num2){
    var sum = parseInt(num1) - parseInt(num2);
    return sum;
}

function divide(num1, num2){
    var sum = parseInt(num1) / parseInt(num2);
    return sum;
}

function calculate(num1, num2, operator){
    if(operator == "add"){
       return add(num1, num2);
    }
    else if(operator == "subtract"){
        return subtract(num1,num2);
    }
    else if(operator == "multiply"){
        return multiply(num1, num2);
    }
    else if(operator == "divide"){
        return divide(num1, num2);
    }
}


function changeHandler(event){
    if(event.target.name === "firstNum"){
        num1 = event.target.value;
        console.log(num1);
    }
    else if(event.target.name === "secondNum"){
        num2 = event.target.value;
        console.log(num2);
    }
    else if(event.target.name === "operator"){
        operator = event.target.value;
        console.log(operator);
    }
}

function clickHandler(event){
    console.log(calculate(num1,num2,operator));
    document.querySelector("p").innerHTML=calculate(num1, num2, operator);

}

// var num1 = 6;
// var num2 = 4;
// function add(num1, num2) {
// return num1 + num2;
// }
 
// function subtract(num1, num2) {
// return num1 - num2;
// }
 
// function multiply(num1, num2) {
// return num1 * num2;
// }
 
// function divide(num1, num2) {
// return num1 / num2;
// }
 
// function calculator(num1, num2, operator) {
// return operator(num1, num2);
// }