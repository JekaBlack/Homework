/* Сформируйте строку вида ".#.#.#.#.#." чередованием символов . и # в каждой итерации с помощью цикла for. После выхода из цикла распечатайте полученную строку. */

var str = "";

var a = ".";
var b = "#";

for (i = 1; i <= 11; i++) {
  if (i % 2 !== 0) {
    str += a;
  }

  if (i % 2 === 0) {
    str += b;
  }
}
console.log(str);