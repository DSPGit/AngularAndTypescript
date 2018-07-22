//asssign default value to param hardcoded
function func3_with_optional_param(num1, num2, num3) {
    if (num3 === void 0) { num3 = 3; }
    return num1 + num2 + num3;
}
// console.log(func2_with_optional_param(1,2,"")); //this will fail as func is expecting a num value
console.log(func3_with_optional_param(1, 2)); //this will pass
console.log(func3_with_optional_param(1, 2, 3)); //this will pass
//asssign default value to param which is predefined
var default_value = 10;
function func4_with_optional_param(num1, num2, num3) {
    if (num3 === void 0) { num3 = default_value; }
    return num1 + num2 + num3;
}
// console.log(func2_with_optional_param(1,2,"")); //this will fail as func is expecting a num value
console.log(func4_with_optional_param(1, 2)); //this will pass
console.log(func4_with_optional_param(1, 2, 3)); //this will pass
//asssign default value to param which is returned by method
function returnValue() {
    return 10;
}
function func5_with_optional_param(num1, num2, num3) {
    if (num3 === void 0) { num3 = returnValue(); }
    return num1 + num2 + num3;
}
// console.log(func2_with_optional_param(1,2,"")); //this will fail as func is expecting a num value
console.log(func5_with_optional_param(1, 2)); //this will pass
console.log(func5_with_optional_param(1, 2, 3)); //this will pass
//asssign default value to param which is returned by method
var objectVal = {
    a: 1,
    b: 2
};
function func6_with_optional_param(num1, num2, num3) {
    if (num3 === void 0) { num3 = objectVal.a; }
    return num1 + num2 + num3;
}
// console.log(func2_with_optional_param(1,2,"")); //this will fail as func is expecting a num value
console.log(func6_with_optional_param(1, 2)); //this will pass
console.log(func6_with_optional_param(1, 2, 3)); //this will pass
function func7_with_optional_param(num1, num2, num3) {
    if (num2 === void 0) { num2 = num1 + 1; }
    if (num3 === void 0) { num3 = objectVal.a; }
    return num1 + num2 + num3;
}
// console.log(func2_with_optional_param(1,2,"")); //this will fail as func is expecting a num value
console.log(func6_with_optional_param(1, 2)); //this will pass
console.log(func6_with_optional_param(1, 2, 3)); //this will pass
