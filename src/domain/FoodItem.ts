export class FoodItem {
  constructor(
    public readonly id: number,
    public name: string,
    public price: number,
    private isAvailable: boolean = true,
  ) {}

  hide() {
    this.isAvailable = false;
  }

  show() {
    this.isAvailable = true;
  }

  isFooditemAvailable(): boolean {
    return this.isAvailable;
  }
}
