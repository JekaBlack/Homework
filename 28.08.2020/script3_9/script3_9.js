/* Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до тех пор, пока не будет нажата Отмена. После выхода из цикла распечатайте количество введенных чисел, их общую сумму и среднее арифметическое. */


var sum = 0;
var b = 0;

while (true) {
  var a = prompt("Введите число");

  if (a === null) {
    break;
  }

  b++;

  j = sum = sum + +a;

  avr = j / b;

  console.log(j, b);
}
alert(
  "Сумма = " +
    j +
    " Количество введенных чисел = " +
    b +
    " Среднее арифметическое = " +
    avr
);
