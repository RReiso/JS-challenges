// Find the length of the longest substring without repeating characters

const maxLength = (string) => {
  let max = 0;
  let start = 0;
  let letterMap = {};

  for (let i = 0; i < string.length; i++) {
    // reset start to the next character after the first occurance of the repeating character
    if (string[i] in letterMap) {
      start = Math.max(start, letterMap[string[i]] + 1);
    }
    // add or update the character in letterMap
    letterMap[string[i]] = i;
    // i+1-start - length of the current non-repeating character substring
    max = Math.max(max, i + 1 - start);
  }
  return max;

  // Time - O(n)
  // Space - O(min(n,m)), n = length of string, m - unique characters. Characters are not limited to letters/numbers.
};

console.log(maxLength("abcdberthjfgd"));
