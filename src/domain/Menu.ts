import { FoodItem } from "./FoodItem";

export class Menu {
  constructor(private foodItems: FoodItem[]) {}

  addFoodItem(foodItem: FoodItem): void {
    this.foodItems.push(foodItem);
  }

  getFoodItems(): FoodItem[] {
    return this.foodItems;
  }
}
