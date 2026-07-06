import { Order } from "../domain/Order";
import { PaymentMethod } from "./PayementMethod";
export class PaypalPayment implements PaymentMethod {
  charge(order: Order): void {
    console.log("Charging payment using PayPal...");
  }
}
