// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of
// the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

const area = (arr) => {
  let maxArea = 0;

  // for (let i = 0; i < arr.length - 1; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     let newArea = Math.min(arr[i], arr[j]) * (j - i);
  //     if (newArea > maxArea) {
  //       maxArea = newArea;
  //     }
  //   }
  // }
  // return maxArea;
  //Time - O(n^2)
  //Space - O(1)

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let currArea = Math.min(arr[start], arr[end]) * (end - start);
    maxArea = Math.max(maxArea, currArea);

    if (arr[start] < arr[end]) {
      start++;
    } else {
      end--;
    }
  }
  return maxArea;
  // Time - O(n);
  // Space - O(1);
};
