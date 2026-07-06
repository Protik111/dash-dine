import { Order } from "../domain/Order";
import { PaymentMethod } from "./PayementMethod";
export class CreditCardPayment implements PaymentMethod {
  charge(order: Order): void {
    console.log("Charging payment using Credit Card...");
  }
}
