// в кожної функції є метод arguments
// який містить масив аргументів, які пере
// даються в функцію
// function func(){
//   for(var i = 0; i < arguments.length; i++){
//     console.log("argument "+ i +": " + arguments[i]);
//   }
// }
//
// func("arg1", "arg2", "arg3");








// arguments є масивом з однієї властивістю length
// щоб зробити з аргументів повноцінний массив, можна зробити
// копію

// function func1(){
//   var arr = [];
//   for(var i = 0; i < arguments.length; i++){
//     arr[i] = arguments[i];
//   }
//
//   console.log(arr);
// }
//
// func1("arg1", "arg2", "arg3");




// перебір елементів масиву методом forEach
// var arr = ["el1", "el2", "el3"];
// arr.forEach(function(item, i , arr){
//   console.log("item:" + item + ", i:" + i);
//   console.log("arr:",arr);
// })

// цей метод приймає як аргумент функцію
// callback function



//tasks/task9.js
