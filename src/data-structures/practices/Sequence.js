import { Comparator } from '../../utils/Comparator.js';

export class Sequence {
  constructor(origin, comparatorFunction = Comparator.defaultCompareFunction) {
    this.compare = new Comparator(comparatorFunction);
    this.origin = origin;
    this.ordered = this.orderBy(comparatorFunction);
  }

  static fromArray(
    array,
    comparatorFunction = Comparator.defaultCompareFunction,
  ) {
    return new Sequence(array, comparatorFunction);
  }

  size() {
    return this.origin.length;
  }

  orderBy(comparatorFunction) {
    return new Sequence(this.origin.sort(comparatorFunction));
  }
}
