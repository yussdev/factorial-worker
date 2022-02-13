function makeFactorial() {
  let cache = new Map();
  return function factorial(n) {
    if (cache.get(n)) {
      //   cache hit
      return cache.get(n);
    }
    // cache miss
    if (n === 1n) {
      return n;
    } else {
      let result = n * factorial(n - 1n);
      cache.set(n, result);
      return result;
    }
  };
}
export const factorial = makeFactorial();
