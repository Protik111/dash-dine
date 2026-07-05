import { FoodItem } from "./domain/FoodItem";
import { Menu } from "./domain/Menu";
import { Restaurent } from "./domain/Restaurent";

const burger = new FoodItem(1, "Burger", 5.99);
const pizza = new FoodItem(2, "Pizza", 8.99);

const menu = new Menu([burger, pizza]);

const restaurent = new Restaurent(1, "My Restaurent", menu);

console.log(
  `Restaurent: ${restaurent.menu
    .getAllFoodItems()
    .map((item) => `${item.name} - $${item.price}`)
    .join(", ")}`,
);
