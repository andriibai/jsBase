// Function Expression
// синтаксис

// var myFunc = function () {
//   console.log("hi");
// }
//
// myFunc();

// основна різниця полягає в тому,
// що Function Declaration можна викликати
// до її оголошення і вона буде видима


// hi();
// function hi() {
//   console.log("hi")
// }


// а в Function Expression буде помилка
// hi();
// var hi = function () {
//   console.log(hi);
// }





// функція може повертати любе значення
// додається слово return
// і в коді, де викликана функція
// повертається значення, яке
// вона повернула

// function func(a) {
//   return a * 2;
// }
//
// console.log(func(5));



// після слова return функція
// перестає виконуватися

// function func(a) {
//     return a * 2;
//     console.log("in func");// не виведеться
// }
//
// console.log(func(5));


// якщо потрібно при якісь умові перестати виконувати
// функцію, то пишеться просто слово return;


// приклад
// function func(num){
//   if(num == 0){
//     console.log("0");
//     return;
//   }
//
//   return 5 / num;
// }
//
// console.log(func(5));



// tasks/task6.js
