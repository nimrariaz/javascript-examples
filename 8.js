/**
 * Created by Nimra Riaz on 3/27/2017.
 */

var width = prompt("Enter the width:");
var height = prompt("Enter the height:");
var shape = prompt("Enter shape type to calculate respective area.");

if (shape == 'rectangle') {
    var result = calculateRectArea(width, height);
    printInConsole();

} else if (shape == 'triangle') {
    var result = calculateTriArea(width, height);
    printInConsole();

} else {
    console.log("Entered type isn't present in current library of source code.");
}

/*Function Definition */

function printInConsole() {
    console.log("Calculated Area is:" + result);
}

function calculateRectArea(width, height) {
    return (width * height);
}

function calculateTriArea(width, height) {
    var area = (width * height) / 2;
    return area;
}