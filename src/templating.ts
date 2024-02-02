export interface Template<T> {
  render(source: T): string;
}

export function html<T>(
  strings: TemplateStringsArray,
  interpolations: Array<(source: T) => string> = []
) {
  return new TemplateImpl(strings, interpolations);
}

class TemplateImpl<T> implements Template<T> {
  constructor(
    private strings: TemplateStringsArray,
    private interpolations: Array<(source: T) => string> = []
  ) {}

  render(source: T): string {
    let result = "";

    for (let i = 0; i < this.strings.length; i++) {
      result += this.strings[i];

      const interp = this.interpolations.at(i);

      if (interp) {
        result += interp(source);
      }
    }

    return result;
  }
}
