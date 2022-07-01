// Find all permutations

const findPermutations = (arr) => {
  let allPermutations = [];

  const swapEl = (arr, i) => {
    if (i === arr.length - 1) {
      allPermutations.push([...arr]);
      return;
    }

    for (let j = i; j < arr.length; j++) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      swapEl(arr, i + 1);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };

  swapEl(arr, 0);
  return allPermutations;
};

console.log(findPermutations([1, 2, 3]));

// Time - O(n! x n) - for every permutation there are n calls
// Space - O(n! x n) - result is n! new arrays with n elements in each
