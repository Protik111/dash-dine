import { FoodItem } from "./FoodItem";

export class Menu {
  constructor(private readonly foodItems: FoodItem[]) {}

  addFoodItem(foodItem: FoodItem): void {
    this.foodItems.push(foodItem);
  }

  getAllFoodItems(): readonly FoodItem[] {
    return [...this.foodItems];
  }

  removeFoodItem(id: number): void {
    const index = this.foodItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.foodItems.splice(index, 1);
    }
  }

  findFoodItem(id: number): FoodItem | undefined {
    return this.foodItems.find((item) => item.id === id);
  }

  hideFoodItem(id: number): void {
    const item = this.findFoodItem(id);

    if (item) {
      item.hide();
    }
  }

  showFoodItem(id: number): void {
    const item = this.findFoodItem(id);

    if (item) {
      item.show();
    }
  }
}
