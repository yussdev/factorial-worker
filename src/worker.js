function makeFactorial() {
  let cache = new Map();
  return function factorial(n) {
    if (cache.get(n)) {
      //   cache hit
      return cache.get(n);
    }
    // cache miss
    if (n === 0) return "1";

    if (!n) return "";

    var i,
      nextNumber,
      carret,
      result = n.toString().split("").reverse().map(Number);

    while (--n) {
      i = carret = 0;

      while ((nextNumber = result[i++]) !== undefined || carret) {
        carret = (nextNumber || 0) * n + carret;
        result[i - 1] = carret % 10;
        carret = parseInt(carret / 10);
      }
    }
    const output = result.reverse().join("");
    cache.set(n, result);
    return output;
  };
}
const factorial = makeFactorial();

export function calcFactorial(n) {
  const result = factorial(n);
  postMessage({
    result,
  });
}
