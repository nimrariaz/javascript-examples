/**
 * Created by Nimra Riaz on 3/28/2017.
 */

var result = stringToArray("i am not alice :/  ");
console.log(result);

function stringToArray(input) {

    var output = [];
    var word = '';
    var reverseWord = '';
    for (var i = 0; i <= input.length; i++) {

        if (input[i] == ' ' || i == input.length) {

            for (var k = word.length - 1; k >= 0; k--) {
                reverseWord += word[k];
            }
            output.push(reverseWord);
            word = '';
            reverseWord = '';
        }
        else {
            word +=  input[i];
        }
    }
    return output;
}