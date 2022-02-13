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

// export function factorial(userInt) {
//     if (userInt === 0)
//         return '1'

//     if (!userInt)
//         return ''

//     var i, nextNumber, carret,

//         result = userInt.toString().split('').reverse().map(Number)

//     while (--userInt) {
//         i = carret = 0

//         while ((nextNumber = result[i++]) !== undefined || carret) {
//             carret = (nextNumber || 0) * userInt + carret
//             result[i - 1] = carret % 10
//             carret = parseInt(carret / 10)
//         }
//     }

//     return result.reverse().join('')
// }
