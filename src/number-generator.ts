export function* numberGeneratorFactory(maximum: number) {
  let value = -1;

  while (true) {
    value = (value + 1) % maximum;
    yield value;
  }
}
