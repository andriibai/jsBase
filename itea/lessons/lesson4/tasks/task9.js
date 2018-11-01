// написати функцію, яка приймає обєкт
var salaries = {
  "ivan": 500,
  "petya": 600,
  "serhiy":2000,
  "sasha": 2500
}

// і повертає імя з найбільшою зарплатою

function func(obj){
  var name = "";
  var maxSalary = 0;
  for(var key in obj){
    if(maxSalary < obj[key]){
      maxSalary = obj[key];
      name = key;
    }
  }

  return name;
}

console.log(func(salaries))



// tasks/task10.js
