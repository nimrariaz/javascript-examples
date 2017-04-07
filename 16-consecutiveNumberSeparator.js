/**
 * Created by Nimra Riaz on 4/6/2017.
 */

// Write a function which accept a number as input and insert dashes (-) between each two consecutive even numbers.
// For example if you accept 025468 the output should be 0-254-6-8.

var input = 012465684335424;
var array = [];
var output;

// console.log(loren(input).toString());

function loren(input) {

    for (var i = 0; i < input.length; i++) {
        if (input[i] % 2 == 0 && input[i + 1] % 2 == 0) {
            array.push(input[i]);
            array.push('-');
        } else {
            array.push(input[i]);
        }
    }
    output = array.join('');
    console.log(output);
    return array;
}
