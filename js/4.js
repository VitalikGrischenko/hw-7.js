let day = prompt("Який день тижня сьогодні?");
let isWeekend = false;

switch (day) {
  case "субота":
  case "неділя":
    isWeekend = true;
    break;
  case "понеділок":
  case "вівторок":
  case "середа":
  case "четвер":
  case "п'ятниця":
    isWeekend = false;
    break;
  default:
    console.log("Введений день тижня недійсний.");
}

if (isWeekend) {
  console.log(`Сьогодні ${day} - вихідний день.`);
} else {
    console.log(`Сьогодні ${day} - робочий день.`);
}