//task1
function func(obj){
  for(var i = 0; i < obj.portfolio_photos; i++){
    obj["photo"+i] = "image"+i;
  }
  return obj;
}


//task2
function func(arr){
  for(var i = 0; i < arr.length; i++){
    arr[i] += 50;
  }
  return arr;
}


//task3
function func(arr){
  var obj = {};
  for(var i = 0; i < arr.length; i++){
    obj["user"+i] = arr[i];
  }
  return obj;
}


//task4
function func(arr){
  var count = 0;
  for(var i = 0; i < arr.length; i++){
    if(typeof arr[i] == "number"){
      count += arr[i];
    }
  }
  return count;
}

//task5.js
function func(str){
    var op = "";
    for(var i = 0; i < str.length; i++){
      if(!+str[i] && str[i] != 0){
        op = str[i];
      }
    }
    var arr = str.split(op);
    switch (op) {
      case "+":
        return +arr[0] + +arr[1];
        break;
      case "-":
        return arr[0] - arr[1];
        break;
      case "*":
        return arr[0] * arr[1];
        break;
      case "/":
        return arr[0] / arr[1];
        break;
      default:
    }
}

//task6
function func(str){
  var arr = str.split("-");
  var newStr = arr[0];

  for(var i = 1; i < arr.length; i++){
    newStr += arr[i][0].toUpperCase() + arr[i].substr(1);
  }

  return newStr;
}

//task7
function func(str){
  var arr = str.split("/");
  return "www.youtube.com/" + arr[1] + "/" + arr[2] ;
}

//task8
function func(arr){
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    if((arr[i].age < 18) == false){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

//task9
function func(){ // не приймає аргументів
  var sum = 0;
  for(var i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  return sum;
}


//task10
function func(arr){
  for(var i = 0; i < arr.length; i++){
    if(arr[i].salary > 1000){
      arr[i].isRich = true;
    } else{
      arr[i].isRich = false;
    }
  }
  return arr;
}

//task11
function func(arr){
  var date = String(new Date());
  // console.log(String(date));
  var currentYear = date.split(" ")[3];

  for(var i = 0; i < arr.length; i++){
    arr[i].yearOfBirthday = currentYear - arr[i].age;
  }
  return arr;
}
