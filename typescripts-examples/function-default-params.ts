//asssign default value to param hardcoded
function func3_with_optional_param(num1:number,num2:number,num3:number=3):number{
    return num1 + num2 + num3;
}
// console.log(func2_with_optional_param(1,2,"")); //this will fail as func is expecting a num value
 console.log(func3_with_optional_param(1,2)); //this will pass
 console.log(func3_with_optional_param(1,2,3)); //this will pass


 //asssign default value to param which is predefined
let default_value = 10;
function func4_with_optional_param(num1:number,num2:number,num3:number=default_value):number{
    return num1 + num2 + num3;
}
// console.log(func2_with_optional_param(1,2,"")); //this will fail as func is expecting a num value
 console.log(func4_with_optional_param(1,2)); //this will pass
 console.log(func4_with_optional_param(1,2,3)); //this will pass

//asssign default value to param which is returned by method
function returnValue (){
    return 10;
}
function func5_with_optional_param(num1:number,num2:number,num3:number=returnValue()):number{
    return num1 + num2 + num3;
}
// console.log(func2_with_optional_param(1,2,"")); //this will fail as func is expecting a num value
 console.log(func5_with_optional_param(1,2)); //this will pass
 console.log(func5_with_optional_param(1,2,3)); //this will pass


//asssign default value to param which is returned by method
let objectVal = {
    a : 1,
    b : 2
}
function func6_with_optional_param(num1:number,num2:number,num3:number=objectVal.a):number{
    return num1 + num2 + num3;
}
// console.log(func2_with_optional_param(1,2,"")); //this will fail as func is expecting a num value
 console.log(func6_with_optional_param(1,2)); //this will pass
 console.log(func6_with_optional_param(1,2,3)); //this will pass


function func7_with_optional_param(num1:number,num2:number=num1+1 ,num3:number=objectVal.a):number{
    return num1 + num2 + num3;
}
// console.log(func2_with_optional_param(1,2,"")); //this will fail as func is expecting a num value
 console.log(func6_with_optional_param(1,2)); //this will pass
 console.log(func6_with_optional_param(1,2,3)); //this will pass
