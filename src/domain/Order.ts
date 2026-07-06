import { OrderStatus } from "../types/types";
import { FoodItem } from "./FoodItem";
import { OrderItem } from "./OrderItem";

export class Order {
  constructor(
    public readonly id: number,
    private readonly items: OrderItem[],
    private status: OrderStatus = OrderStatus.PENDING,
  ) {}

  calculateTotal(): number {
    return this.items.reduce((total, item) => total + item.subTotal(), 0);
  }
}
