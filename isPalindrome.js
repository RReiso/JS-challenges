// Check if a string is a palindrom

const isPalindrome = (string) => {
  let reversedString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  if (reversedString === string) {
    return true;
  }
  return false;

  // Time - O(n^2) - as in JS strings are immutable, adding to a string means copying the whole
  // string and adding a new character to the copy.
  // Space - O(n)
};
