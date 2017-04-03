/**
 * Created by Nimra Riaz on 3/27/2017.
 */

var input1 = prompt("Enter number1:");
var input2 = prompt("Enter number2:");
var x;
var count = 1;
var operation = prompt("Enter 1 to perform addition" +
    "Enter 2 to perform subtraction" +
    "Enter 3 to perform multiplication" +
    "Enter 4 to perform division" +
    "Enter 5 to find modulus" +
    "Enter 6 to exit");


switch (x) {
    case 1: {
        var result = addition(input1, input2);
        console.log('Addition Operation result:' + result);
        break;
    }
    case 2: {
        var result = subtraction(input1, input2);
        console.log('Subtraction Operation result:' + result);
        break;
    }
    case 3: {
        var result = multiplication(input1, input2);
        console.log('multiplication Operation result:' + result);
        break;
    }
    case 4: {
        var result = division(input1, input2);
        console.log('division Operation result:' + result);
        break;
    }
    case 5: {
        var result = modulus(input1, input2);
        console.log('modulus Operation result:' + result);
        break;
    }
    case 6: {
        console.log('Exit' + result);
        count++;
        break;
    }

}
function addition(num1, num2) {
    var result = num1 + num2;
    return (result);
}
function subtraction(num1, num2) {
    var result = num1 - num2;
    return (result);
}
function multiplication(num1, num2) {
    var result = num1 * num2;
    return (result);
}
function division(num1, num2) {
    var result = num1 / num2;
    return (result);
}
function modulus(num1, num2) {
    var result = num1 % num2;
    return (result);
}
