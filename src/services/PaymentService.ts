import { Order } from "../domain/Order";

export class PaymentService {
  charge(order: Order): void {
    console.log("Charging payment...");
  }
}
