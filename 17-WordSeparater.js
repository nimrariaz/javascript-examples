/**
 * Created by Nimra Riaz on 4/6/2017.
 */
//
// Write a function which converts “Lorem IpsuM DolAr” into “lorem-ipsum-dolar”.

var phrase = "Lorem IpsuM DolAr";
console.log(lowerCaseWordSeparator(phrase));
console.log(foo(phrase));

// Without using replace() method

function lowerCaseWordSeparator(input) {
    var phrase = '';
    for (var i = 0; i < input.length; i++) {
        if (input[i]== ' '){
            phrase += '-';
        }
        else{
            phrase += input[i].toLowerCase();
        }
    }
    return phrase;
}

// Using replace() method with regular expression

function foo(input){
    var lowercase;
    var output;
    lowercase= input.toLowerCase();
    output = lowercase.replace(/ /g,"-");
    return output;
}