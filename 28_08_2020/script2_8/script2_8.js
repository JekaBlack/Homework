var month = new Date();
month.getMonth();

switch (month.getMonth()) {
  case 11: 
  case 0: 
  case 1: alert("Время года -  Зима"); break;
  case 2: 
  case 3: 
  case 4: alert("Время года -  Весна"); break;
  case 5:  
  case 6: 
  case 7: alert("Время года -  Лето"); break;
  case 8: 
  case 9:
  case 10: alert("Время года -  Осень"); break;
}