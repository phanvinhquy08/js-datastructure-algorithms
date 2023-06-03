import { Comparator, ComparatorFunction } from '../../utils/Comparator.ts';

export class Sequence<T> {
  private comparator: Comparator<T>;
  private ordered: T[]; // ordered sequence
  constructor(
    private origin: T[],
    comparatorFunction: ComparatorFunction<T> = Comparator.defaultCompareFunction,
  ) {
    this.comparator = new Comparator(comparatorFunction);
    this.ordered = [...origin].sort(comparatorFunction);
  }

  sortImmutable() {
    return [...this.origin].sort(this.comparator.compare);
  }

  getOrigin() {
    return this.origin;
  }

  getOrdered() {
    return this.ordered;
  }

  reverse() {
    return new Sequence([...this.origin].reverse(), this.comparator.compare);
  }

  size() {
    return this.ordered.length;
  }

  add(value: T) {
    this.origin.push(value);
    this.ordered = this.sortImmutable();

    return this;
  }
}
