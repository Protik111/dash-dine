import { Order } from "../domain/Order";

export class AnalyticsService {
  track(order: Order): void {
    console.log("Tracking analytics...");
  }
}
