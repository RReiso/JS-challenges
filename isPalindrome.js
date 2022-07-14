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
  
  
  
  let reversedLetterArr = [];

  for (let i = string.length - 1; i >= 0; i--) {
    reversedLetterArr.push(string[i]);
  }

  if (reversedLetterArr.join("") === string) {
    return true;
  }

  return false;

  // Time - O(n) - two times looping (string and arr)
  // Space - O(n)
  
  
  
  let i = 0;
  let j = string.length - 1;
  
   while (i < j) {
    if (string[i] !== string[j]) {
      return false;
    } else {
      i++;
      j--;
    }
  }
  return true;
  
  // Time - O(n/2 - number of loops) => O(n)
  // Space - O(1)
};
