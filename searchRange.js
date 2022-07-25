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
