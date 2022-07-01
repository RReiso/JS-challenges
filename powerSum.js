// peculiar array - every element is either an integer or another peculiar array. It is never empty.
// Find the sum of elements. - sum of elements raised to the number which represents how far the array is nested.

const powerSum = (array, power = 1) => {
  let sum = 0;
  for (let el of array) {
    if (Array.isArray(el)) {
      sum += powerSum(el, power + 1);
    } else {
      sum += el;
    }
  }
  return Math.pow(sum, power);
};

console.log(powerSum([3, [1, 2], 7, [1, [2]]]));

// Time - O(n)
// Space - O(d), d - the max level of depth, how far the array is nested. Represents the maximum number of calls in a call stack at the same time.
