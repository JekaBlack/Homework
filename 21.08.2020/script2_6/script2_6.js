var day = prompt("Запишите текущий день недели");
day = day.toLowerCase();

if (day == "суббота" || day == "воскресенье") {
  alert("Выходной");
} else {
  alert("Идти на работу");
}
