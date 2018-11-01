// написати функцію, яка приймає обєет
// і повертає сумму всіх його значень
// наприклад

var salaries = {
  "ivan": 500,
  "petya": 600,
  "serhiy":2000,
  "sasha": 2500
}

// функція повинна повернути 2000 + 2500 + 600 + 500 = 5600

function func(obj){
  var sum = 0;
  for(var key in obj){
    sum += obj[key];
  }

  return sum;
}

console.log(func(salaries));




// tasks/task9.js
