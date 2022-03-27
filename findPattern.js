const findPattern = (str, pattern) => {
  let j = 0;
  let repetition = 0;
  for (let i = 0; i < str.length; i++){

      if (str[i] !== pattern[j]) {
        j = 0;
      }else {
        j++;
      }

      if (j === pattern.length) {
        j = 0;
        repetition++;
      }
  }
  console.log('repeat', repetition)
  return repetition
}
// Time - O(n)
// Space - O(1)
