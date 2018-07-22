var number1=100;
var number2=200;

number1="1000";
number2="2000";

var number3 = 3000;

if (typeof number1===Number){
    var result = number1+number2;
    console.log(result);
}else{
    console.log("Type mismatch!")
}