type ArrayElement<T> = {
  isArray: ArrayElem<T extends ReadonlyArray<infer E> ? E : never>;
  notArray: T;
}[T extends ReadonlyArray<any> ? "isArray" : "notArray"];

type ArrayElem<T> = T extends ReadonlyArray<any> ? ArrayElement<T> : T;

export function flat<T>(array: ReadonlyArray<T>): Array<ArrayElement<T>> {
  let result: any[] = [];

  return array.reduce((pre, curr) => {
    return pre.concat(Array.isArray(curr) ? flat(curr) : curr);
  }, result);
}
