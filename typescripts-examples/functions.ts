function func1(num1:number,num2:number):number{
    return num1 + num2;
}
// console.log(func1()); //this will fail as the TS is expecting 2 arguments
// console.log(func1("a",3)); //this will fail as the TS is expecting 2 arguments first one as number and other as number as well
console.log(func1(1,2));

//? followed with param name
function func2_with_optional_param(num1:number,num2:number,num3?:number):number{
    return num1 + num2;
}
// console.log(func2_with_optional_param(1,2,"")); //this will fail as func is expecting a num value
// console.log(func2_with_optional_param(1,2)); //this will pass
// console.log(func2_with_optional_param(1,2,3)); //this will pass