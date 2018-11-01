// перебір ключів обєкту




// var obj = {
//   name: "NAME",
//   surname: "SURNAME",
//   age: 25,
//   car: "BMW"
// }


// синтаксис
// for(var key in obj){
//   console.log("key :",key);
//   console.log("value :", obj[key]);
// }





//важливо
// при переборі кожного разу в змінну key буде записано імя
// кожного ключа і доступатися до нього потрібно
// через квадратні дужки
// якщо використовувати крапку , то значення буде undefind

// for(var key in obj){
//     console.log("key :",key);
//     console.log("value :", obj.key); // undefind
// }





// виконається стільки раз, скільки є
// ключів в обєкті






// клонування обєктів
// для того, щоб клонувати обєкт і створити
// повноцінний обєкт, який не буде посилатися той,
// з якого копіювали, можна зробити наступне


// var obj1 = {
//   name: "name",
//   surname: "surname"
// }
//
// var clone = {};
// for(var key in obj1){
//   clone[key] = obj1[key];
// }

// // //console.log(clone);

// і при змінні значень одного обєкта,
// значення другого не поміняються

// clone.name = "Pasha";
// console.log(obj1);
// console.log(clone);






// також є метод Object.assign ,
// який дозволяє копіювати обєкти


// var user = {
//   name: "John",
//   surname: "Snow",
//   say: "Winter is coming!"
// }
//
// var copy = {};
//
// Object.assign(copy, user);
// console.log(copy);

// і якщо поміняти обєкту user
// любу властивість, то обєкт copy залишиться без змін

// user.name = "Sansa";
// console.log(copy);



// довжина обєкту
// в JS в обєктів немає властивості length
// але є метод Object.keys(obj).length , який
// повертає кількість ключів в обєкті


// var obj5 = {
//   name: "name",
//   surname: "surname",
//   age: 18,
//   email: "email@gmail.com",
//   isMarried: false
// }
//
// console.log(Object.keys(obj5).length);


// tasks/task6.js
