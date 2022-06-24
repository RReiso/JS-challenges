// Given an ordered array of integers, return an array of the squared integers in ascending order.

const arrayOfSquares = (arr)=>{
  const result = new Array(arr.length).fill(0);
  let left = 0;
  let right = arr.length - 1
  let maxUnfilledIdx = arr.length - 1
  
  while (left <= right) {
    let leftSquare = arr[left] * arr[left];
    let rightSquare = arr[right] * arr[right] 

    if (leftSquare > rightSquare){
      result[maxUnfilledIdx] = leftSquare
      left++;
    } else {
      result[maxUnfilledIdx] = rightSquare
      right--;
    }
    maxUnfilledIdx--;
  }
  return result;
}

// Time - O(n)
// Space - O(n)
