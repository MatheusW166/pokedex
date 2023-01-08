/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 *
 * @param count [number]
 * @param callback [Function]
 * @returns A [Function] that executes the callback when its calls number reaches 'count'
 */
export function after(count: number, callback: Function): Function {
  let nOfcalls = 0;
  return function (...rest: any) {
    nOfcalls = nOfcalls + 1;
    if (nOfcalls === count) return callback(...rest);
  };
}
