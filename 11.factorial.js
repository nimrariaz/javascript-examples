/**
 * Created by Nimra Riaz on 3/28/2017.
 */

var recursiveFactorial = factorial(5);
console.log("Recursive Approach: " + recursiveFactorial);

var iterativeFactorial = factorialOne(5);
console.log("Iterative Approach: " + iterativeFactorial);


// Iterative approach to calculate factorial
function factorialOne(num) {
    var result = 1;
    for (var i = num; i >= 1; --i) {
        result = result * i;
    }
    return (result);
}
//Recursive function to calculate Factorial
function factorial(n) {
    if (n == 1)
        return 1;
    else
        return (n * factorial(n - 1))
}

// // Iterative approach to calculate factorial
// function factorialOne(num) {
//     var value = num;
//     var result = 1;
//     for (var i = 1; i <= num; i++) {
//         result = result * value;
//         value = value - 1;
//     }
//     return (result);
// }
