// Given an array nums containing n distinct numbers in the range [0, n],
//  return the only number in the range that is missing from the array.
var missingNumber = function (nums) {
	const arr = Array.from(Array(nums.length + 1).keys());

	sum1 = arr.reduce((acc, currentValue) => acc + currentValue);

	sum2 = nums.reduce((acc, currentValue) => acc + currentValue);

	return sum1 - sum2;
};
missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);