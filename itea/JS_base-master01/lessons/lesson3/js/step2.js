// switch


// заміняє багато if
// switch (зміннна) {
//   case значення змінної: виконається
//                     якщо змінна === значенню
//     break;
//   case значення2 змінної: виконається
//                       якщо змінна === значенню2
//     break;
//   default:
//   виконається, якщо нічого вище не виконалося
// }


// var a = 10;
// switch(a){
//   case 1:
//     console.log(1);
//     break;
//   case 2:
//     console.log(2);
//     break;
//   case 10:
//     console.log(10); // виведеться 10
//     break;
//   default:
//     console.log("default");
// }



// Обовязково потрібно ставити оператор break
// інакше виконаються наступні кейси після основного


// var a = 4;
//
// switch (a) {
//   case 3:
//     console.log(3);
//   case 4:
//     console.log(4);//виконається цей кейс
//   case 5:
//     console.log(5);//виконається, бо немає break
//                     //у попередньому кейсі
//   default:
//     console.log("default"); // виконається,
//                               //бо немає break у попередньому
//                               //кейсі
// }


// можна групувати кейси

var a = 100;

switch (a) {
  case 100:
    console.log("good");
    break;

  case 50:  //виконається, коли а = 50
  case 150: // або а = 150
    console.log("wrong")
    break;
}




//tasks/task3.js
