// Data types

//primitive data types

var age = 25; //Number

var name = "John Doe"; //String

var isMarried = false; //Boolean

var email = null; //Null --> use when data isnt known.

var skype; //Undefined 


//obj
var obj = {
  age: 25,
  name: "John Doe",
  isMarried: false,
  email: null,
  skype: undefined
}


// check type of data

console.log(typeof age,' age');
console.log(typeof name,' name');
console.log(typeof isMarried,' isMarried');
console.log(typeof email,' email'); // language error. it didnt fix yet because of compability. null is data type.
console.log(typeof skype,' skype');

console.log(typeof obj, ' obj');
