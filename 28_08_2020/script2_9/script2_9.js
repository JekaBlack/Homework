var lang = prompt('Выберите "ru" или "en"');
var day = prompt('Напишите номер дня недели (от 0 до 6)');
if (lang == "ru"){
    switch (day){
        case '0': alert("Воскресенье"); break;
        case '1': alert("Понедельник"); break;
        case '2': alert("Вторник"); break;
        case '3': alert("Среда"); break;
        case '4': alert("Четверг"); break;
        case '5': alert("Пятница"); break;
        case '6': alert("Суббота"); break;
    }
}
else if (lang == "en") {
    switch (day){
        case '0': alert("Sunday"); break;
        case '1': alert("Monday"); break;
        case '2': alert("Tuesday"); break;
        case '3': alert("Wednesday"); break;
        case '4': alert("Thursday"); break;
        case '5': alert("Friday"); break;
        case '6': alert("Saturday"); break;
    }
}