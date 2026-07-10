import { AnalyticsService } from "./AnalyticalService";
import { InventoryService } from "./InventoryService";
import { NotificationService } from "./NotificationService";
import { Order } from "../domain/Order";
import { PaymentService } from "./PaymentService";
import { PaymentMethod } from "../payment/PayementMethod";

export class PlaceOrderService {
  constructor(
    //instead of using the PaymentService
    //private readonly paymentService: PaymentService,
    // we will use PaymentMethod interface to make it more flexible and decoupled
    private readonly paymentMethod: PaymentMethod,

    private readonly inventoryService: InventoryService,

    private readonly notificationService: NotificationService,

    private readonly analyticsService: AnalyticsService,
  ) {}

  place(order: Order): void {
    //instead of using the PaymentService, we will use the PaymentMethod interface to make it more flexible and decoupled
    //this.paymentService.charge(order);
    this.paymentMethod.charge(order);

    this.inventoryService.decrease(order);

    this.notificationService.send(order);

    this.analyticsService.track(order);
  }
}
