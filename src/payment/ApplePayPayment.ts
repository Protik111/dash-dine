import { Order } from "../domain/Order";
import { PaymentMethod } from "./PayementMethod";

export class ApplePayPayment implements PaymentMethod {
  charge(order: Order): void {
    console.log("Charging payment using Apple Pay...");
  }
}
