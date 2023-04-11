let monthNumber = prompt("Який номер поточного місяця?");

switch (Number(monthNumber)) {
  case 12:
  case 1:
  case 2:
    console.log("Зараз зима!");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Зараз весна!");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Зараз літо!");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Зараз осінь!");
    break;
  default:
    console.log("Введено недійсний номер місяця.");
}