/* Напишите бесконечный цикл, который прерывается при помощи команды break, когда Math.random() > 0.99. Выведите в окно alert случайное число, прервавшее цикл, и количество итераций цикла. */

var b = 0;

while (true) {
  var a = Math.random();

  b++;

  if (a > 0.99) {
    break;
  }
}

console.log(a, b);
alert(a + " Число интераций: " + b);
