/**
 * Created by Nimra Riaz on 3/28/2017.
 */

var result = stringToArray("i am not alice :/  ");
console.log(result);

function stringToArray(input){
    var output, word;

    output = [];
    word = '';

    for (var i = 0, j = 0; i <= input.length; i++) {

        if (input[i] == ' ' || i == input.length) {
            output.push(word);
            word = '';
        }
        else {
            word += input[i];
        }
    }
    return (output);
}