/**
 * Created by Nimra Riaz on 5/17/2017.
 */

/*Write a Function that calculates sum of multiple of 3 & 5 below 1000*/

function sumOfMultiples() {
    var sum = 0;
    for (var i = 1; i < 1000; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            console.log(i + ' Multiple of 3 or 5  found');
            sum += i;
            console.log('New sum is:' + sum);
        }
    }
    return sum;
}



