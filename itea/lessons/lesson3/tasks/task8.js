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

function func(a, b) {
  //тут код

}


document.getElementById("btn").onclick = function () {
  var inp1 = +document.getElementById("input1").value;
  var inp2 = +document.getElementById("input2").value;
  var res = func(inp1,inp2);
  alert(res);
};
