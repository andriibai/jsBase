// hardcore
// написати факторіал


// ввести в перший інпут число
// і функція повинна вернути факторіал

// наприклад
// 5! = 5*4*3*2*1 = 120
// і т.д.



function fact(num) {
  //тут код
  //параметр num містить введене значення

}

document.getElementById("btn").onclick = function () {
  var inp1 = +document.getElementById("input1").value;
  document.getElementById("input2").value = fact(inp1);
};
