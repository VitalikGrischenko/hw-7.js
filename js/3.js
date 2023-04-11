let beverage = prompt("Виберіть напій: Кава, Чай або Сік");
let price;

switch (beverage) {
  case "Кава":
    price = 30;
    break;
  case "Чай":
    price = 15;
    break;
  case "Сік":
    price = 20;
    break;
  default:
    console.log("Вибачте, такий напій відсутній у меню.");
}

if (price !== undefined) {
    console.log(`Ваша замовлення: ${beverage}. Сума до сплати: ${price} грн.`);
}