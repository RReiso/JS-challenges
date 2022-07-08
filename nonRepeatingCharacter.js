// Repeat the index of the first non repeating character

const findNonRepeatingCharacter = (string) => {
  // let repeat;
  // for (let i = 0; i < string.length; i++) {
  //   repeat = false;
  //   for (let j = 0; j < string.length; j++) {
  //     if (string[i] === string[j] && i !== j) {
  //       repeat = true;
  //     }
  //   }
  //   if (repeat === false) {
  //     return i;
  //   }
  // }
  // return null;

  // // Time - O(n^2)
  // // Space - O(1)

  let letterCount = {};

  for (let i = 0; i < string.length; i++) {
    if (string[i] in letterCount) {
      letterCount[string[i]]++;
    } else {
      letterCount[string[i]] = 1;
    }
  }

  for (let i = 0; i < string.length; i++) {
    if (letterCount[string[i]] === 1) {
      return i;
    }
  }
  return null;
};

console.log(findNonRepeatingCharacter("a454a3"));

// Time - O(n)
// Space - O(1) - lowercase, uppercase letters - 26 + 26, digits - 10
