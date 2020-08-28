var byte = prompt("Введите значение Байт");
var kbyte = +byte / 1000;
var mbyte = +byte / 1e6;
var gbyte = +byte / 1e9;

alert(
  kbyte + "(КБайт)" + "; " + mbyte + "(МБайт)" + "; " + gbyte + "(ГБайт)" + "."
);
