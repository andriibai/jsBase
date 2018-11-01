//task in folder homework 1

var str = "\n\n\n\n\n\n\n\n0\n";
// console.log(str);

console.log(+str); // Number(\n0\n) --> 0








// ||  &&
// ||  OR
// var a = "";
// var b = 0;
// var c = NaN;
// var d = "d";

// return first variable, that is true
// console.log(a || b  || d || c); // --> d


//if all variables are false, return last variable.
// d = undefined;
// console.log(a || b  || d || c); // --> c




// &&  AND

var q = 1;
var w = "lol";
var e = true;

// if all are true, return last variable
// console.log(q && w && e);


// if one variable is false, return first false variable
q = false;
console.log(w && q && e);


// if all are false, return first false variable
w = 0;
e = NaN;
console.log(w && q && e);



// priority in && is greater than in ||

//task
//what result
//alert( null || 2 || undefined );
//alert( 1 && null && 2 );
// alert( null || 2 && 3 || 4 )





// "use strict" - supports present standart of javascript

// a = 5;
// console.log(a);
// console.log(typeof a);


// "use strict"
// var a = 5;
// console.log(a);
// console.log(typeof a);




// if , if else , if else if

var age = +prompt("how old are you");

//
// var access;
// if(age < 18){
//   access = false;
//   console.log("you dont have access");
// } else if(age >= 18){
//   access = true;
//   console.log("you have access");
// } else if(!age){
//   console.log("write a number");
// }





//task 1
// using if else write code, that asks a name.
// if name is "Jone Doe" say "Hello, John Doe"
// in other case say "I dont know you"




// if(age >= 18){
//   access = true;
//   console.log('you have access')
// } else if(age < 18 || !age){
//   access = false;
//   console.error("write a number or grow up")
// }





// ternary operator
// access = (age >=18) ? true : false;
// console.log("access", access);




// ternary operator with many conditions
// var message = (age < 18) ? "access = false" :
// (age >= 18) ? "access = true" :
// (!age) ? "write a number" :
// "i will be never executed";
//
// console.log("message:", message);











//task 2
// using if else if and prompt method write code that asks user login
// if he clicked Cancel say "Bye"
// if login is not "Admin", say "I dont know you"
// if login is "Admin", then ask password
// if password is "password", say "Hi admin"
// if password is not password, say "wrong password"
// if user clickec Cancel, say bye
