// значення обєктів можна зразу записати
// при створенні




// синтаксис
// var obj = {
//   name: "John",
//   surname: "Doe"
// }
//
// console.log(obj);





// звертатися до значень обєкту
// можна також через квадратні дужки


// var obj2 = {
//   name: "Mike"
// }

// синтаксис
// obj2["name"] = "Nick";
//
// console.log(obj2);

// obj2["name"] аналогічний з obj2.name





// це створене для того,щоб якщо ключ
// складається з декількох слів або
// знаків типу тире і т.д.
// могти до нього звертатися без помилок

// наприклад

// var obj3 = {
//   name: "Sasha"
// }
//
// obj3["is married"] = false;
// console.log(obj3);





// якщо використовувати синтаксис через крапку,
// була би помилка
// obj3.is married = false;  -->помилка







// якщо при створенні самого обєкту вже відомо
// що один з ключів буде подібний на попередній
// то синтаксис наступний


// var obj4 = {
//   name: "ivan",
//   "is married": false
// }
//
// console.log(obj4);







// для видалення певного ключі і значення
// використовується слово delete


// var obj5 = {
//   name: "Pasha",
//   age: 18
// }
//
// delete obj5.age;
// console.log(obj5, "obj5"); // залишиться лиш name

//tasks/task3.js
