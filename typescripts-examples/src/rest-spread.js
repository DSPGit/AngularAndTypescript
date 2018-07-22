function addition(n1, n2) {
    var others = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        others[_i - 2] = arguments[_i];
    }
    return n1 + n2 + others.length;
}
console.log(addition(1, 2));
console.log(addition(1, 2, 3, 4, 5, 6));
var cities = ["bangalore", "pune", "delhi", "chennai"];
function printCities() {
    var cities = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        cities[_i] = arguments[_i];
    }
    console.log("printing cities---->", cities);
}
printCities.apply(void 0, cities);
//spread array values as individual number values
var num = [1, 2, 3, 4, 5];
var maxNumber = Math.max.apply(Math, num);
console.log("max of the list is--->", maxNumber);
