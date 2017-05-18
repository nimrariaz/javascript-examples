/**
 * Created by Nimra Riaz on 5/17/2017.
 */

/* The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143 ? */

function primeFactorization(input) {
    var primeNoArray = primeNumbers();
    var primeFactors = [];

    for (var i = 0; primeNoArray[i] <= input; i++) {
        if (input % primeNoArray[i] == 0) {
            input = input / primeNoArray[i];
            primeFactors.push(primeNoArray[i]);
            i = -1;
        }
    }
    return primeFactors;
}

function primeNumbers() {
    var primeNos = [];
    var multipleFlag = false;

    for (var i = 2; i < 10000; i++) {
        for (var j = 2; j <= i; j++) {
            if (i % j == 0 && i == j) {
                multipleFlag == true ? multipleFlag = false : primeNos.push(i);
            } else if (i % j == 0 && i != j) {
                multipleFlag = true;
            }
        }
    }
    return primeNos;
}