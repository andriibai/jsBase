// Написати функцію, яка робить наступне
// повертає менший з параметрів
// наприклад
// min(1,2) повинно повернути 1
// min(10, 20) повертає 10
// перший параметр записуємо в перший інпут,
// другий параметр записуємо в другий інпут
// результат виведеться алертом




function min(a, b) {
  //тут код
  // повинно повертати менше з двох чисел
}


document.getElementById("btn").onclick = function () {
  var inp1 = +document.getElementById("input1").value;
  var inp2 = +document.getElementById("input2").value;
  var res = min(inp1,inp2);
  alert(res);
};
