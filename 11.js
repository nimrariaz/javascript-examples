/**
 * Created by Nimra Riaz on 3/28/2017.
 */

var base = prompt("Enter base value:");
var expo = prompt("Enter exponent value:");

var result = calcExpo(base, expo);
console.log("Result is: " + result);

// Function Alternate to Math.pow(x,y)
// var result = Math.pow(base,expo);

function calcExpo(base, expo) {
    var power = 1;
    for (var i = 1; i <= expo; i++) {
        power *= base;
    }
    return power;
}