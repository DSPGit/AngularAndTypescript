function addition(n1, n2){
    if(!n1){
    n1=10;
    }
    if(!n2){
    n1=20;
    }
    return n1 + n2;
}

console.log(addition());
console.log(addition(100));
console.log(addition(100,200));
console.log(addition("a", "b"));

function plus(num1, num2){
    var extraParams = new Array().slice.call(arguments, 2); //or you can use Array.prototype.slice.call
    var extraParams2 = Array.prototype.reverse.call(arguments, 2);
    console.log("These are extra params-->",extraParams, " and the no. of extra params are -->", extraParams.length);
    console.log("reverse of extra params-->",extraParams2, " and the no. of extra params are -->", extraParams.length);
    return num1+num2;
}

console.log("plus--->", plus(1,2,"asd", 23.90, true, new Array(1,2,3)));