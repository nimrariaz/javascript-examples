/**
 * Created by Nimra Riaz on 3/28/2017.
 */

var result = reverseString("this is crazy sentence written by croro k choozay.");
console.log("Reverse String:" + result);

function reverseString(input) {
    var reverseStr = '';
    for (var i = input.length - 1; i >= 0; i--) {
        reverseStr = reverseStr + input[i];
    }
    return reverseStr;
}