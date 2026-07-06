import { Order } from "../domain/Order";

export interface PaymentMethod {
  charge(order: Order): void;
}
