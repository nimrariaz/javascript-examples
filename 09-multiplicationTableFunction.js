/**
 * Created by Nimra Riaz on 3/28/2017.
 */

var input = prompt("Enter digit whose multiples are required:");
multiplicationTable(input);

function multiplicationTable(num) {
    var value;
    for (var i = 1; i <= 10; i++) {
        value = i * num;
        console.log(i + " X " + num + " = " + value);
    }
}

