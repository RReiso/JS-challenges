// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

const sumOfElements = (arr, value) => {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    let neededValue = value - arr[i];
    // if (map[neededValue]) {
    if (neededValue in map) {
      return [map[neededValue], i];
    } else {
      map[arr[i]] = i;
    }
  }
  return [];
};

// Time - O(n)
// Space - O(n) - n key-value pairs
