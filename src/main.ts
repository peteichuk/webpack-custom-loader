import { Single } from './single';

export class Main {

  getValue(v: string): string {
    return v;
  }

  getName(): string {
    return new Single().defaultName();
  }
}
