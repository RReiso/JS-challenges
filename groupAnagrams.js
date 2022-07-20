// Given an array of strings, group anagrams together

const groupAnagrams = (arrOfStrings) => {
  // create an array of sorted strings
  const sorted = arrOfStrings.map((string) => string.split("").sort().join(""));
  const stringMap = {}; // keys - strings from sorted array; values - arrays of strings from arrOfStrings

  for (let i = 0; i < arrOfStrings.length; i++) {
    if (!stringMap[sorted[i]]) {
      stringMap[sorted[i]] = [arrOfStrings[i]];
    } else {
      stringMap[sorted[i]].push(arrOfStrings[i]);
    }
  }

  return Object.values(stringMap);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat", "tab"]));
//  [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat', 'tab' ] ]

// Time - O(n * mlogm) - n - length of input array, m - max length of a string
// Space - O(n * m) - sorted array, stringMap and return value - each take this much space
