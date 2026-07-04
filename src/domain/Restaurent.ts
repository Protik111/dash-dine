import { Menu } from "./Menu";

export class Restaurent {
  constructor(
    public readonly id: number,
    public name: string,
    public readonly menu: Menu,
  ) {}
}
