var bus_number = prompt(
  "Впишите номер маршрутки (номера маршруток, чтобы добраться домой: 7, 225 и 255)"
);
if (bus_number == 7 || bus_number == 225 || bus_number == 255) {
  alert("Вы едете домой");
} else {
  alert("Вы ожидаете");
}
