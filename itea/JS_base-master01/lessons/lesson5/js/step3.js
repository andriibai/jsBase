// перебір значень масиву чи стрічки

// // стандартний перебір
// var arr = [100,200,300];
// for(var i = 0; i < arr.length; i++){
//   console.log(arr[i]); //виведе 100,200,300
// }
//
//
// // перебір з кінця
// for(var i = arr.length-1; i >= 0; i--){
//   console.log(arr[i]);
// }

// другий перебір є трохи швидший,
// тому що в першому переборі умова
// закінчення масиву i < arr.length
// і на кожній ітерації обчислюється arr.length
// в другому переборі умова i >= 0,
// тому другий швидший.
// на практиці це несуттєво




// метод split string
// var str = "qwerty1,qwerty2,qwerty3,qwerty4";
// var arr = str.split(",");
//
// console.log(arr);





// якщо два параметри, то другий відповідає
// за кількість значень
// var str2 = "qwerty1,qwerty2,qwerty3,qwerty4";
// var arr2 = str2.split(",", 2);
// console.log(arr2); // виведе qwerty1,qwerty2





// метод join
// var arr3 = ["Name1", "Name2", "Name3"];
// var str3 = arr3.join(";");
// console.log(str3);




//tasks/task5.js
