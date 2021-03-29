//1.if else statement
var age=10;


if(age>=18)
{
    console.log("You are eligible for vote");
}
else{
    console.log("You are not not Eligible for vote");
}


//2.Ternery Operator

var myAge=26;

console.log((myAge>=18)?"You Can Vote ":"Yoy Can't Vote");


//3.Nested If else statement
/*
var area="Yog";

var PI=3.14; var l=10; var b=20; var r=30;


if(area=="circle"){
    console.log("The area of circle is"+PI*r**2);
}
else if(area=="triangle"){
    console.log("The Area of triangle"+(l*b)/2);
}else if(area=="rectangle"){
    console.log("The Area of triangle"+(l*b));
}
else{
    console.log("Enter Valid Value");
}

*/

//4.Switch Case


var area="Data";

var PI=3.14;
var r=2; var l=3; var b=6;

switch(area){
    case "circle":
        console.log("The area of circle is"+PI*r**2);
    break;
    case "rectangle":
        console.log("The Area of triangle"+(l*b));
    break;
    case "triangle":
        console.log("The Area of triangle"+(l*b)/2);
    break;
    default:
        console.log("Enter Valid data");
        
}


//5.While Loop


var num=0;

while(num<=1000)
{
    console.log(num);
    num++;
}


//6.For Loop
var num2=0;


for(num2=0;num2<=10;num2++){
    debugger;
    console.log(num2);
}
