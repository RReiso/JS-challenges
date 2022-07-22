const binarySearch = (array, num) => {
  let left = 0;
  let right = array.length-1;

  while (left <= right){
    let middleIdx = Math.floor((left + right) / 2);

    if (array[middleIdx] === num){
      return middleIdx;
    }

    if (array[middleIdx] < num){
      left = middleIdx + 1
    }
    
    if (array[middleIdx] > num){
      right = middleIdx - 1
    }

  }
  return -1;
}

//Time - O(logn)
//Space - O(1)


const recursiveBinary = (nums, target) => {
  const recursiveCall = (nums, target, start, end) => {
    let middle = Math.floor((start + end) / 2);
    if (start > end) {
      return -1;
    }
    if (nums[middle] === target) {
      return middle;
    }
    if (nums[middle] > target) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    return recursiveCall(nums, target, start, end);
  };
  return recursiveCall(nums, target, 0, nums.length - 1);
};

console.log(recursiveBinary([1, 2, 3, 4, 5], 29));

// Time - O(logn)
// Space - O(logn) - number of calls in call stack
