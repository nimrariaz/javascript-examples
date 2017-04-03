/**
 * Created by Nimra Riaz on 3/29/2017.
 */

var colors = ['red', 'Green', 'blue'];
var cars = ['Mercedes', 'ODI', 'Corolla'];

colors.push('purple');
console.log('Original array:' + colors);
colors[colors.length] = 'pink';
colors.splice(3, 0, 'orange', 'brown', 'black');
console.log('Extended array:' + colors);
var slice = colors.slice(1);
console.log('Sliced array:' + slice + 'Extended array:' + colors);

var avaialableCars = colors.concat(cars);

console.log(avaialableCars);