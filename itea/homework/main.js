//task1
//В діапазоні від 1 до 50 вивести всі числа кратні 3.(while)

// var i = 1;
// while ( (i >= 1) && (i <= 50) ){
//     if( i % 3 === 0) {
//         console.log(i);
//     }
//     i++;
// }

// task2
// Попросити юзера ввести email. Потрібно перевірити чи він ввів email.
// кщо ввів email, сказати “Дякую”.
// Якщо ввів не email, попросити знову ввести email.
// Просити до тих пір, поки не введе email.

// var userEmail = prompt('Your email');
//
// while( !userEmail.includes('@') ){
//     console.log('Your email is not correct');
//     var userEmail = prompt('Your email');
// }
//
// console.log('Thank you', userEmail);


// task3
// Модифікувати завдання в попередній задачі - якщо користувач ввів email, в
// якому є дві собачки(@) або більше, тоді написати. що email некоректний і попросити знову ввести email.


//  var userEmail = prompt('Your email');
//  var count = 0;
//  var dog = userEmail.indexOf('@');
//  while ( dog !==-1  ){
//      count++;
//      dog = userEmail.indexOf('@', dog + 1);
//  }
// // console.log(count);
//  if ( count !== 1 ){
//      userEmail = prompt('Your email');
//  } else{
//      console.log('Thank you', userEmail);
//  }

//task4
//Є стрічка “qWeRtY”. Написати код, який міняє регістр з нижнього на верхній і навпаки. Тобто результат має бути “QwErTy”
var str = 'qWeRtY';
var i=0;
while( i < str.length){
  str = str[i].toUpperCase();
  i++;
}
console.log(str);
//task5
//В діапазоні від 0 до 20 додати всі кратні числа. тобто код має додати 0+2+4+6+8+10+12+14+16+18 = 90.
// Код має працювати якщо збільшити діапазон наприклад з 20 до 30.
