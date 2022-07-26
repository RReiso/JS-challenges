// Given an array of integers nums sorted in non-decreasing order,
// find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

const searchRangeRecursive = (nums, target) => {
  const range = [-1, 1];
  const left = 0;
  const right = nums.length - 1;
  findLeftExtreme(nums, target, range, left, right);
  findRightExtreme(nums, target, range, left, right);
  return range;
};

const findLeftExtreme = (nums, target, range, left, right) => {
  // base case - target not in array
  if (left > right) {
    return;
  }

  const middle = Math.floor((left + right) / 2);

  if (nums[middle] === target) {
    // MODIFY binary search
    //check if middle points to the first element of the array
    if (middle === 0) {
      range[0] = 0; // 0 is the left extreme

      // check the previous element
    } else if (nums[middle - 1] === target) {
      findLeftExtreme(nums, target, range, left, middle - 1);
    } else {
      range[0] = middle; // left extreme
    }
  } else {
    // CONTINUE with binary search as usual
    if (target < nums[middle]) {
      findLeftExtreme(nums, target, range, left, middle - 1);
    } else {
      findLeftExtreme(nums, target, range, middle + 1, right);
    }
  }
};

const findRightExtreme = (nums, target, range, left, right) => {
  // base case - target not in array
  if (left > right) {
    return;
  }

  const middle = Math.floor((left + right) / 2);

  if (nums[middle] === target) {
    // MODIFY binary search
    //check if middle points to the last element of the array
    if (middle === right) {
      range[1] = right; // right extreme

      // check the next element
    } else if (nums[middle + 1] === target) {
      findRightExtreme(nums, target, range, middle + 1, right);
    } else {
      range[1] = middle; // right extreme
    }
  } else {
    // CONTINUE with binary search as usual
    if (target < nums[middle]) {
      findRightExtreme(nums, target, range, left, middle - 1);
    } else {
      findRightExtreme(nums, target, range, middle + 1, right);
    }
  }
};

console.log(searchRangeRecursive([1, 2, 3, 5, 5, 5, 5, 7, 8, 9], 5));

// Time - O(logn)
// Space - O(logn)


const searchRangeIterative = (nums, target) => {
  const leftExtreme = findLeftExtremeIt(nums, target);
  const rightExtreme = findRightExtremeIt(nums, target);
  return [leftExtreme, rightExtreme];
};

const findLeftExtremeIt = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let middle;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      // MODIFY
      // check if this is the first element in the array
      if (middle === 0) {
        return 0;
      }
      // check if previous element is equal to target
      if (nums[middle - 1] === target) {
        right = middle - 1;
      } else {
        return middle; // previous element is not equal to target => this is left extreme
      }
    } else {
      // CONTINUE with binary search
      if (nums[middle] < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }
  return -1;
};

const findRightExtremeIt = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let middle;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      // MODIFY
      // check if this is the last element in the array
      if (middle === nums.length - 1) {
        return middle;
      }
      // check if next element is equal to target
      if (nums[middle + 1] === target) {
        left = middle + 1;
      } else {
        return middle; // next element is not equal to target => this is right extreme
      }
    } else {
      // CONTINUE with binary search
      if (nums[middle] < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }
  return -1;
};

console.log(searchRangeIterative([1, 2, 3, 5, 5, 5, 5, 7, 8, 9], 5));
console.log(searchRangeIterative([1, 1, 2, 2, 2, 3, 4], 9));

// Time - O(logn)
// Space - O(1)
