import { Toping } from "./toping"

export class Pizza {
    constructor(
      public id?: number,
      public name?: string,
      public topings?: Toping[]) { }
  }