// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that 
// the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] 
// might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

const searchRotatedSortedArray = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let middle;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      return middle;
    }

    if (nums[left] <= nums[middle]) {
      // left part is sorted
      if (target > nums[left] && target < nums[middle]) {
        // target is in left part
        right = middle - 1;
      } else {
        // target is in right part
        left = middle + 1;
      }
    } else {
      // right part is sorted
      if (target <= nums[right] && target > nums[middle]) {
        // target is in right part
        left = middle + 1;
      } else {
        // target is in left part
        right = middle - 1;
      }
    }
  }
  // target is not in the array
  return -1;
};

console.log(searchRotatedSortedArray([5, 1, 2, 3, 4], 4));

// Time - O(logn) - like binary search
// Space - O(1)
