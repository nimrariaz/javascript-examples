/**
 * Created by Nimra Riaz on 3/27/2017.
 */

var count =1;
var lotteryNumber = 78;
while(1==1){
    var guess  = prompt("Guess the lottery number in two digits?");
    if (guess == lotteryNumber){
        console.log("Congratulation.... Correct Guess on  " + count + " iteration");
        break;

    } else if (guess > lotteryNumber){
        console.log("You have guessed higher than the result");

    } else if (guess < lotteryNumber){
        console.log("You have guessed lower than the result");

    } else if (guess == lotteryNumber-1 || lotteryNumber+1){
        console.log("You are very close to the  target");
    }
    count++;
}
