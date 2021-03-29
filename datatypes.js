/*
Following are six type of datatyep that are primitive
1.undefined
2.boolean
3.string
4.number
5.BigInt
6.Symbol

in javascript true is represents 1 and false is represents 0
in javascript we cant substract string it gives NaN(Not a number)

*/

var myName="Yogesh Sabankar";

var myAge=29;

var adult=true;


console.log(typeof(myName));
console.log(typeof(myAge));
console.log(typeof(adult));
console.log(typeof(city));
console.log("===============================================");

console.log(10+"20");
console.log(10-"6");//its Bug it gives result 4 but how we can substract number from string
console.log("Yogesh"+"Sabankar");
console.log("Yogesh  "+"    Sabankar");
console.log("     "+"         ");
console.log("   "+900);
console.log("Yogesh"-"Sabankar");
console.log(true+true);
console.log(true+false);
console.log(false+true);
console.log(false-true);



