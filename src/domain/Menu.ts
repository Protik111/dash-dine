import { FoodItem } from "./FoodItem";

export class Menu {
  constructor(private foodItems: FoodItem[]) {}

  addFoodItem(foodItem: FoodItem): void {
    this.foodItems.push(foodItem);
  }

  getFoodItems(): readonly FoodItem[] {
    return [...this.foodItems];
  }

  removeFoodItem(foodItem: FoodItem): void {
    const index = this.foodItems.findIndex((item) => item.id === foodItem.id);
    if (index !== -1) {
      this.foodItems.splice(index, 1);
    }
  }

  findFoodItemBy(id: number): FoodItem | undefined {
    return this.foodItems.find((item) => item.id === id);
  }
}
