// Search for a target value in a 2D matrix

const searchMatrix = (matrix, target) => {
  let topRow = 0;
  let bottomRow = matrix.length - 1;
  let middleRow;

  while (topRow <= bottomRow) {
    middleRow = Math.floor((topRow + bottomRow) / 2);
    if (matrix[middleRow][0] > target) {
      bottomRow = middleRow - 1;
    } else if (matrix[middleRow][matrix[0].length - 1] < target) {
      topRow = middleRow + 1;
    } else {
      break; // the element might be in the current row
    }
  }

  if (topRow > bottomRow) {
    return false; // target is not in the matrix
  }

  // regular binary search
  let left = 0;
  let right = matrix[0].length - 1;
  let middle;
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (matrix[middleRow][middle] === target) {
      return true;
    }
    if (matrix[middleRow][middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return false; // target is not in the matrix
};

console.log(
  searchMatrix(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [20, 30, 40, 50],
    ],
    10
  )
);

// Time - O(logm + logn) = O(log(mn)), m - nr of rows, n - nr of elements in a row, we perform two binary searches
// Space - O(1)
