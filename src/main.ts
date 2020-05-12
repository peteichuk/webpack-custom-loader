import { Single } from './single';

export class Main {

  originMethod(v: string): string {
    return v;
  }

  getName(): string {
    return new Single().defaultName();
  }
}
