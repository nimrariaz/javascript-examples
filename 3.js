/**
 * Created by Nimra Riaz on 3/27/2017.
 */

var width = prompt("Enter the width:");
var height = prompt("Enter the height:");
var result = calculateArea(width,height);
printInConsole();

/*Function Definition */

function printInConsole(){
    console.log("Calculated Area is:" + result);
}

function calculateArea(width,height){
return width*height ;
}