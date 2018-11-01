// Попереднэ завдання
const requiredMinAge = 12;
const requiredMaxAge = 17;

const requiredCity = 'Lviv';
const requiredHasChildrenStatus = false;
const requiredMarriageStatus = false;

var userAge = +prompt('Enter your age');
var userCity = prompt('Enter your city');
var userHasChildrenStatus = confirm('Do you have children? Click OK if true, Cancel if false');
var userMarriageStatus = confirm('Are you married? Click OK if true, Cancel if false');


var access = false;
if(userAge >= requiredMinAge && userAge <= requiredMaxAge && userCity === requiredCity && userHasChildrenStatus === requiredHasChildrenStatus && userMarriageStatus === requiredMarriageStatus) {
    access = true;
    alert('You have access');
} else {
    access = false;
    alert('You don\'t have access');
}


// Методи і властивості різних типів даних.

// Стрічка
// var str = "John Doe";
// var length = str.length;
//
// // збережеться довжина змінної str
// console.log(length);


// // str.toUpperCase()
// var str2 = "itea";
// //виведе str2 в верхньому регістрі
// //Важливо -- метод toUpperCase не міняє змінну, а просто повертає значення в верхньому регістрі
// console.log(str2.toUpperCase());
//
// console.log(str2); // значення лишилося "itea"
//
// // щоб зберегти значення в верхньому регістрі, потрібно просто результат присвоїти змінній
// var res = str2.toUpperCase();
// console.log(res);
//
//
// // Щоб отримати значення певного символу стрічки, потрібно звернутися до нього через []
//
// var str3 = "IvanoFrankivsk";
//
// // виведе першу букву, бо рахунок починається з нуля.
// console.log(str3[0]); // I
//
// // якщо звертатися до символу, якого немає, поверне undefined
// console.log(str3[100]); //undefined



// // пошук слова в слові
// var str = "lala1Tlala2";
//
// // метод indexOf() повертає порядковий номер букви чи слова, якщо воно є. якщо немає , повертає -1
// var result = str.indexOf("T");
// console.log(result);  // поверне 5, бо буква T на 5 позиції(якщо рахувати з нуля)
//
//
// var result2 = str.indexOf("A");
// console.log(result2);// поверне -1, бо букви А немає взагалі в змінній str.



