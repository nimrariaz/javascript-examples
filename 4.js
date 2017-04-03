// /**
//  * Created by Nimra Riaz on 3/27/2017.

var x = -10;
var y = 19;


for (var i = x; i <= y; i++) {
    console.log(i);
}
for (var i = 10; i <= 40; i++) {
    if (i % 2 == 0) {
        console.log("Number is even " + i);
    }
}
for ( var i = 300; i <= 333; i++) {
    if (i % 2 !== 0) {
        console.log("Number is odd " + i);
    }
}
for (var i = 5; i <= 50; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log("Number is multiple of 3 and 5 : " + i);
    }
}