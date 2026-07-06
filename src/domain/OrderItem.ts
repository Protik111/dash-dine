import { FoodItem } from "./FoodItem";

export class OrderItem {
  constructor(
    private readonly foodItem: FoodItem,
    private readonly quantity: number,
  ) {}

  subTotal(): number {
    return this.foodItem.price * this.quantity;
  }
}
