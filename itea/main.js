/**
 * Created by BOOSTA on 29.10.2018.
 */

// task
// використовуючи if else і логічне або превірити чи вік користувача є в діапазоні між 18-60(наприклад рекомендації для прийому якихось ліків)
// якщо юзеру менше 18 - написати щоб не пив ліків
// якщо більше 60 , також написати щоб не пив ліків
// якщо вік знаходиться в діапазоні 18-60 - сказати, що може пити
// "казати" можна використовуючи console.log() або alert().
// для того щоб спитати, можна використати метод prompt або просто створити змінну age з любим віком.

/*var age = +prompt('Your age');
if (age < 18){
    console.log('Do not drink');
} else if (age > 60){
    console.log('Do not drink');
} else{
    console.log('Drink')
}*/


//task
// наприклад в нас є сайт для випускників школи, в якій ви вчилися
// і є 3 змінні
// var school = 25; // номер школи
// var city = "Lviv"; //місто
// var year = 2005; //рік випуску
//
// потрібно давати доступ людині(створити змінну access і задати їй значення true),
// яка закінчила ту саму школу в тому самому місті в той самий рік.
//
// використовувати if else і логічне I
//
// якщо людина не з того міста або не з тої школи, вивести щось типу "у вас нема доступу"

/*var school = 25; // номер школи
var city = "Lviv"; //місто
var year = 2005; //рік випуску

var userSchool = +prompt('Your scholl');
var userCity = prompt('Your city');
var userYear = +prompt('Your age');

var access = false;

if(userSchool === school && city=="Lviv" && year==2005 ){
    console.log(access);
}else{
    console.log('0');
}*/

/*var res1 = "age" || 0;
var res2 = true && false || true;
var res3 = null || undefined && true;
var res4 = " " && "name" || null && true;
var res5 = (!null || !undefined) && "25";
var res6 = !("" || !25 && "s") && true;
var res7 = !(+"age");
var res8 = "" && ((!null || !undefined) && "25");
var res9 = 1 && null && 2;
var res10 = null || 2 && 3 || 4;

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);
console.log(res6);
console.log(res7);
console.log(res8);
console.log(res9);
console.log(res10);*/

//task 1
// є стрічка
// var str = "Hello World";
// вивести кожну букву цієї стрічки
// тобто має бути так
// H
// e
// l
// l
// o
//
// W
// o
// r
// l
// d
//
// або алертами



/*var name = prompt('Your name');
while(name != 'admin'){
    name = prompt('Your name');
}
console.log('hello', name);*/

//task 3
// використовуючи while вивести всі парні числа, які є в діапазоні 1-20
// тобто має вивестись
// 2
// 4
// 6
// 8
// 10 . т.д.

/*var i=1;
while (i<=20){
    if( i % 2 === 0){
        console.log(i);
    }
    i++;
}*/


/*var num = +prompt('Your number');
while(num <= 100){
    num = +prompt('Your number');
}
console.log('hello', num);*/

//спитати в користувача email і пароль
// Перевірити чи користувач ввів email(якщо в слові є хоча б одна собачка, значить це email)
// і пароль(пароль має бути не менше 8 символів)
// якщо дві умови виконуються, то присвоїти змінній access = true, якщо хоча б одна умова не виконується
// тоді access = false;
//

/*var email = prompt('Your email ?');
var pass = prompt('Your pass ?');

var access = false;
if(email.include('@') && pass.length >=8){
    console.log('ok', email);
}else{
    console.log('none');
}*/

// конвертер валют
// ми можемо конвертувати 3 валюти
// доллари, євро,фунти
// доллари - d
// євро - e
// фунти - f
// наприклад
// 100e
// 200d
// 300f
//
// і хай курс буде наступний
// 1 доллар = 26 грн
// 1 євро = 31 грн
// 1 фунт = 35грн
//
// спитати юзера що він їоче конвертувати в гривні
// тобто треба ввести наприклад 100d
// і вивести йому значення значення 2500(без букв, тільки число)

/*var curs = prompt('Your');
var ammount = str.substring( 0, str.length-1) * 26;
varcurency = str[str.length - 1];
var result = 0;

if (curency === 'd'){
    result = ammount * 26;
} else if(curency === 'f'){
    result = ammount * 31;
} else{
    result = ammount * 36;
}*/

/*var curs = prompt('Your');
var ammount = +str.substring( 0, str.length-1);
var curency = str[str.length - 1];
var result = 0;
switch (curency){
        case 'd':
            result = ammount * d;
            console.log('rez =', result );
            break;
        case 'e':
            result = ammount * e;
            console.log('rez =', result );
        case 'f':
            result = ammount * f;
            console.log('rez =', result );
            break;
        default:
            console.log('default');
}
*/

// ввести число
// наприклад ввести 5
// і в result має бути 1+2+3+4+5 = 15

// var num = +prompt('Your number');
// var rez = 0;
// for (var i =0; i <= num; i++){
//     rez+=i;
// }
// console.log(rez);

// var input = prompt("Enter");
// function someFunc(num) {
//     var result="";
//     //var str=""
//     for(var i=0; i<input.length; i++){
//         if(num[i]=== '1') {
//              result += '0';
//         } else {
//             result += '1';
//         }
//     }
//     console.log(+result)
// }
// someFunc(input);


// Написати функцію, яка робить наступне
// повертає менший з параметрів
// наприклад
// min(1,2) повинно повернути 1
// min(10, 20) повертає 10


// var num1 = +prompt('Enter num 1');
// var num2 = +prompt('Enter num 2');
//
// function min(a, b) {
//     //тут код
//     // повинно повертати менше з двох чисел
//
//     // if( a < b ){
//     //     return a;
//     // } else if( a > b ){
//     //     return b;
//     // } else{
//     //     return a;
//     // }
//     //ternarnui operator
//     return a > b ? a : b;
// }
// var result = min(num1, num2);
// console.log(result);



// написати калькулятор
// наприклад
// 1+2
// і функція повинна повернути сумму першого і другого елемента
// 5*5
// повертає 25
// 8-3
// повертає 5
// 4/2
// повертає 2

// умова
// числа задаємо в діапазон від 0 до 9
// повноцінний калькулятор напишемо коли
// пройдемо масиви

// var input = prompt('Calculate');
//
// function calculate(text) {
//     //тут код
//     //параметр text містить введене значення
//     var op =  text[1];
//     var num1 = +text [0];
//     var num2 = +text [2];
//
//     switch (op){
//         case '+' :
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*' :
//             return num1 * num2;
//         case '/' :
//             return num1 / num2;
//     }
// }
//
// var result = calculate(input);
// console.log(result);


// пишемо функцію піднесення в степінь
// наприклад
// в перший інпут вводимо число, яке хочемо піднести в степінь
// в другий інпут сам степінь
//
// і функція повинна повертати число в степені
// наприклад
// 2 в 3 степені = 8
// 3 в 3 = 27
// і так далі
//
// результат виведеться алертом
// потрібно памятати, що любе число в 0 степені = 1

// var num = +prompt('Enter number');
// var power = +prompt("Enter power");
// function func(a, b) {
//     //тут код
//     if( b === 0 ) {
//         return 1;
//     }
//     var result = a;
//     for (var i = 1; i < b; i++){
//         result = result * a;
//     }
//     return result;
// }
//
// var result = func(num, power);
// alert(result);


// hardcore
// написати факторіал


// наприклад
// 5! = 5*4*3*2*1 = 120
// і т.д.

// var input = +prompt('Enter number');
// function fact(num) {
//     //тут код
//     //параметр num містить введене значення
//     var result = 1;
//     var i = 1;
//     while (i >= num){
//         result = result * i;
//         num--;
//     }
//     return result;
// }
//
// var result = fact(input);
// alert(result);


// написати функцію, яка приймає обєкт
// в обєкта є одна властивість - username
// var obj = {};
// obj.username = "blablabla";

// і створює для нього посилання
// на профіль на будьякому сайті
// наприклад

// var obj = {};
// obj.username = "ivan1994";
// // func(obj) --> повинно повернути    https://www.facebook.com/ivan1994
//
// function func(myObj){
//     var site = 'https://www.facebook.com/';
//     var userName = myObj.username;
//     return site + userName;
// }
//
// var result = func(obj);


// написати функцію, яка приймає обєкт
// і видаляє в ньому елемент за наступним
// критерієм
// наприклад
var obj = {
    name: "sasha",
    yearOfBirth: 1996,
    "придатний до арміі" : true  //якщо true, то видалити цей ключ і значення
}
// повинна повернути -->
// {
//   name:"sasha",
//   yearOfBirth: 1996,
// }


function func(myObj){
   if( myObj['придатний до арміі'] === true ){
       delete  myObj['придатний до арміі'];
   };
   return myObj;
};
var result = func(obj);
console.log(result);