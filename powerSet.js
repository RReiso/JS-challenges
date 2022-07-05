// Output all subsets from elements of the given array

const powerSet = (nums) => {
  let allSubsets = [];

  const helper = (i, subset) => {
    if (i === nums.length) {
      allSubsets.push([...subset]);
      return;
    }

    // don't add element to the subset
    helper(i + 1, subset);
    // add element to the subset
    subset.push(nums[i]);
    helper(i + 1, subset);
    subset.pop();
  };
  helper(0, []);
  return allSubsets;
};

console.log(powerSet([1, 8, 7])); 
//  [
//   [],       [ 7 ],
//   [ 8 ],    [ 8, 7 ],
//   [ 1 ],    [ 1, 7 ],
//   [ 1, 8 ], [ 1, 8, 7 ]
// ]

// Time - O(2^n x n) - pushes to allSubset and average pushes to each subset (n/2 --- simplified = n)
// Time - O(2^n x n) - subsets and average number of elements in each subset (n/2 --- simplified = n)
