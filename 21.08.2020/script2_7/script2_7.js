var lang = prompt("Write: 'ru', 'en' or 'de");
var greeting = "";

if (lang == "ru") {
  greeting = "Привет!";
} else if (lang == "en") {
  greeting = "Hello!";
} else if (lang == "de") {
  greeting = "Hallo!";
}

alert(greeting);