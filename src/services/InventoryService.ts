import { Order } from "../domain/Order";

export class InventoryService {
  decrease(order: Order): void {
    console.log("Reducing inventory...");
  }
}
