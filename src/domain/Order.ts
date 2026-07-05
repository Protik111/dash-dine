import { OrderStatus } from "../types/types";
import { FoodItem } from "./FoodItem";

export class Order {
  constructor(
    public readonly id: number,
    private readonly items: (FoodItem & { quantity: number })[],
    private status: OrderStatus = OrderStatus.PENDING,
  ) {}

  calculateTotal(): number {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }
}
