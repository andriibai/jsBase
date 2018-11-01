// якщо звертатися до ключа, якого не існує
// повернеться undefined

// var obj = {
//   name:"Sasha",
//   surname: "Ivanov"
// }
//
// console.log(obj.age);







// також обєкти можуть містити в собі
// інші обєкти
//
// наприклад

// var user = {
//   name: "John",
//   surname: "Doe",
//   marriage: {
//     isMarried: true,
//     wifeName: "Sara"
//   }
// }
//
// console.log(user);






// також можуть зберігати функції


// var user2 = {
//   name: "Pasha",
//   surname: "Ivanov",
//   allInfo: function () {
//     return user2.name + user2.surname;
//   }
// }
//
// console.log(user2);





// для того, щоб отримати allInfo,
// потрібно викликати ключ як функцію

// console.log(user2.allInfo());



// потрібно викликати через назву ключа + ()
// якщо звернутися без (), повернеться сама функція
// console.log(user2.allInfo);





// для того щоб перевірити чи є ключ в обєкті,
// існує умова
// синтаксис
// if(ключ in обєкт){
//
// }
// якщо в обєкті є такий ключ, то виконається тіло умови


// приклад
// var user3 = {
//   age: 25,
//   email: "lala@gmail.com"
// }
//
// if("age" in user3){
//   console.log(user3.age); // виведе 25
// }


// якщо ключа немає, то умова не виконається
// if("name" in user3){
//   console.log("nope");
// }




// доступ до значень обєкта через змінну
// var user4 = {
//   name: "pasha",
//   isMarried: false
// }
//
//
// var key = "isMarried";
//
// // щоб доступитися до значення через змінну,
// // потрібно передати змінну в квадратні дужки
//
// console.log(user4[key]); // виведе false


// Важливо
// потрібно звертатися не user5["key"],
// а user4[key].
//
// в першому випадку буде спроба звернутися до значення,
// яке містить в ключі "key", тобто user4.key.
// а потрібно, щоб зверталося до значення, ключ якого
// міститься в змінній key


//Важливо
// якщо ми звертаємося до значення обєкту через
// змінну, в якій містить ключ(так як вище),
// то виклик типу user4.key не буде працювати

// var user5 = {
//   name: "pasha",
//   isMarried: false
// }
//
// var key = "isMarried";
//
// console.log(user5.key); // поверне undefined
// бо в user5 немає ключа "key"



//tasks/task4.js
