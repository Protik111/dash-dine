import { AnalyticsService } from "./AnalyticalService";
import { InventoryService } from "./InventoryService";
import { NotificationService } from "./NotificationService";
import { Order } from "../domain/Order";
import { PaymentService } from "./PaymentService";

export class PlaceOrderService {
  constructor(
    private readonly paymentService: PaymentService,

    private readonly inventoryService: InventoryService,

    private readonly notificationService: NotificationService,

    private readonly analyticsService: AnalyticsService,
  ) {}

  place(order: Order): void {
    this.paymentService.charge(order);
    this.inventoryService.decrease(order);
    this.notificationService.send(order);
    this.analyticsService.track(order);
  }
}
