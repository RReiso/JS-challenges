// Question 2: Write a javascript function that takes an array of numbers and a target number.
//The function should find two different numbers in the array that, when added together, give the target number.
//For example: answer([1,2,3], 4)should return [1,3]

const givenArray = [1, 10, 6, 3, 2, 3, 4, 9, 5];
const targetNr = 8;

var output = (array, number) => {
  //making a copy of the input array so the function input is not changed
  const workingArray = [...array];

  // sorting in ascending order
  workingArray.sort((a, b) => a - b);

  // creating a new array for storing found numbers
  let outputArray = [];

  for (let i = 0; i < workingArray.length; i++) {
    for (let j = 1; j < workingArray.length; j++)
      // looking for two numbers that add up to target number, pushing them into the output array
      if (workingArray[i] + workingArray[j] === number) {
        outputArray.push(workingArray[i]);
        outputArray.push(workingArray[j]);
        return outputArray;

        // if the sum of two numbers exceed the target number, break from the loop
      } else if (workingArray[i] + workingArray[j] > number) {
        break;
      }
  }
  //if can't find two numbers that add up to target number
  return "not found";
};

console.log(output(givenArray, targetNr)); // [2,6]
