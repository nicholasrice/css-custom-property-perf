import { numberGeneratorFactory } from "./number-generator.js";

export function* classNameGeneratorFactory(maximum: number) {
  const counter = numberGeneratorFactory(maximum);

  while (true) {
    yield `item-${counter.next().value}`;
  }
}
