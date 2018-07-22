function addition (n1:number, n2:number, ...others): number {

return n1 + n2 + others.length;
}

console.log(addition(1,2));
console.log(addition(1,2,3,4,5,6));

var cities = ["bangalore", "pune", "delhi", "chennai"];

function printCities(...cities){
    console.log("printing cities---->",cities);
}
printCities(...cities);

//spread array values as individual number values
var num = [1,2,3,4,5]
var maxNumber = Math.max(...num)
console.log("max of the list is--->",maxNumber);
