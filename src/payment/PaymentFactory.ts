import { ApplePayPayment } from "./ApplePayPayment";
import { CreditCardPayment } from "./CreditCardPayment";
import { PaymentMethod } from "./PayementMethod";
import { PaypalPayment } from "./PaypalPayment";

export class PaymentFactory {
  static create(type: string): PaymentMethod {
    switch (type) {
      case "credit":
        return new CreditCardPayment();
      case "paypal":
        return new PaypalPayment();
      case "apple":
        return new ApplePayPayment();
      default:
        throw new Error(`Payment method ${type} not supported`);
    }
  }
}
