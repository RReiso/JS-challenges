const mono = (arr) => {
  
  // compare first and last elements of the array to know if the array should be increasing, decreasing or constant
  if (arr[0] < arr[arr.length - 1]) {
    for (let i = 0; i < arr.length -1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
  } else if (arr[0] > arr[arr.length - 1]) {
    for (let i = 0; i < arr.length -1; i++) {
      if (arr[i] < arr[i + 1]) {
        return false;
      }
    }
  } else {
    for (let i = 0; i < arr.length -1; i++) {
      if (arr[i] !== arr[i + 1]) {
        return false;
      }
    }
  }
  return true;
}

// Time - O(n)
// Space - O(1)
