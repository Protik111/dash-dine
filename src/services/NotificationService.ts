import { Order } from "../domain/Order";

export class NotificationService {
  send(order: Order): void {
    console.log("Sending notifications...");
  }
}
