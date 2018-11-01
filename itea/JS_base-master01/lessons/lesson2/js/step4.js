// Попереднє завдання
var school = 25; // номер школи
var city = "Lviv"; //місто
var year = 2005; //рік випуску

var userSchool = +prompt('Enter your school number');
var userCity = prompt('Enter your city');
var userYear = +prompt('Enter your graduation year');

var access = false;

if(userSchool === school && userCity === city && userYear === year) {
    access = true;
    alert('You have access');
} else {
    access = false;
    alert('You don\'t have access');
}

// Логічне заперечення


// приводить змінну до логічного типу і повертає протилежний результат.

var age = 25;

// Приведе змінну age до логічного типу (в данному випадку true) і поверне протилежне до true значення --> false
console.log(!age); //false


console.log(!NaN); // true


var isMarried = false;
console.log(!isMarried); // true


// приведе змінну до логічного типу (пуста стрічка --> false) і поверне протилежне значення.
var emptyString = "";
console.log(!emptyString);


//task
// який буде результат і чому

//в даному випадку будуть повертатися не логічні значення true/false , а значення, які повернули true/false
// тобто в першому випадку повернеться не true, a "age"
var res1 = "age" || 0;
var res2 = true && false || true;
var res3 = null || undefined && true;
var res4 = " " && "name" || null && true;
var res5 = (!null || !undefined) && "25";
var res6 = !("" || !25 && "s") && true;
var res7 = !(+"age");
var res8 = "" && ((!null || !undefined) && "25");
var res9 = 1 && null && 2;
var res10 = null || 2 && 3 || 4;




//task
// нехай в нас є сайт для якогось підліткового форуму
// написати програму, яка перевіряє наступні дані юзера
// місто, вік, чи одружений і чи має дітей.
//
// якщо має дітей і одружений, значить не давати доступ і вивести відповідне повідомлення
// якщо вік від 12 до 17 і з міста "Lviv" і при цьому немає дітей і не одружений , тоді дати доступ.
// Тобто отримує доступ той, хто зі Львова, не має дітей (бо це можу бути чийсь тато чи мама, який хоче перевірити чим займаються діти), чий
// вік попадає в діапазн від 12 до 17 і хто не одружений.
//
//
// Можна запитувати юзера методом prompt, але легше просто присвоїти ці змінні прямо тут
// var age = 15;
// var city = "Ternopil";
// var hasChildren = false;
// var isMarried = false;
//
// користувач, який описаний вище , не отримає доступ, бо він не зі Львова.
