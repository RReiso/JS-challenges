const mergeArrays = (arr1, arr2) => {
  let res = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }

  return res;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  let leftArr = mergeSort(arr.slice(0, middle));
  let rightArr = mergeSort(arr.slice(middle));

  let res = mergeArrays(leftArr, rightArr);
  return res;
};

console.log(mergeSort([1, 4, 2, 8, 4, 9, 5, 0, 11, 1]));

// Time - O(nlogn)
// Space - O(n)
