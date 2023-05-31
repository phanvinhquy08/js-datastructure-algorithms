export type ComparatorFunction<T> = (a: T, b: T) => number;

export class Comparator<T> {
  compare: ComparatorFunction<T>;
  constructor(compareFunction?: ComparatorFunction<T>) {
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

  static defaultCompareFunction<T>(a: T, b: T) {
    if (a === b) return 0;
    return a < b ? -1 : 1;
  }

  isEqual(a: T, b: T) {
    return this.compare(a, b) === 0;
  }

  isLessThan(a: T, b: T) {
    return this.compare(a, b) < 0;
  }

  isGreaterThan(a: T, b: T) {
    return this.compare(a, b) > 0;
  }

  isLessThanOrEqual(a: T, b: T) {
    return this.isLessThan(a, b) || this.isEqual(a, b);
  }

  reverse() {
    const compareOriginal = this.compare;
    this.compare = (a, b) => compareOriginal(b, a);
  }
}
