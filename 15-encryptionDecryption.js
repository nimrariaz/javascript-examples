/**
 * Created by Nimra Riaz on 3/30/2017.
 */


var key = Number(prompt('Enter desired key value for encryption: '));
console.log(encrypt('Good Morning Nimra Riaz Ramish Fatima', key));
// console.log(decrypt('KfjoXxOfXw', key));

function encrypt(input, key) {
    var db = initializeDictionary();
    var output = [];
    var x;
    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < db.length; j++) {

            if (input[i] == db[j]) {

                if ((j + key) > db.length - 1) {
                    x = (j + key) - (db.length - 1);
                    output.push(db[x - 1]);

                } else if ((j + key) < 0) {
                    x = (db.length) + (j + key);
                    output.push(db[x]);

                } else {
                    output.push(db[j + key]);
                }

                output.join(' ');
            }
        }
    }
    return output.join('');
}


function decrypt(input, key) {
    var db = initializeDictionary();
    var output = [];
    var x;
    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < db.length; j++) {
            if (input[i] == db[j]) {

                if ((j - key) < 0) {
                    x = (db.length) + (j - key);
                    output.push(db[x]);

                } else if ((j - key) > db.length - 1) {
                    x = (j - key) - (db.length - 1);
                    output.push(db[x - 1]);

                }
                else {
                    output.push(db[j - key]);
                }

                output.join(' ');
            }
        }
    }
    return output.join('');
}

function initializeDictionary() {
    var dictionary = [];
    for (var i = 32; i <= 122; i++) {

        if ((32 < i && i < 48) || (57 < i && i < 65) || (90 < i && i < 97)) {
        } else {
            dictionary.push(String.fromCharCode(i));
        }
    }
    return dictionary;
}