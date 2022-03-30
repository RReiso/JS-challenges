// Rotate the elements of the array to the right by the given number of steps.

const rotate = (arr, step) => {
  // FIRST METHOD
  // step = step % arr.length
  // const leftSide = arr.slice(arr.length - step);
  // const rightSide = arr.slice(0, arr.length - step)
  // return [...leftSide, ...rightSide]

  // SECOND METHOD
  // const res = new Array(arr.length).fill(0);
  // for (let i = 0; i < arr.length; i++) {
  //   let newPosition = (i + step) % arr.length
  //   res[newPosition] = arr[i];
  // }
  // return res

  //THIRD METHOD
  const reverse = (arr, start, end) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  };
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, step - 1);
  reverse(arr, step, arr.length - 1);
  return arr;
};

// Time - O(n);
// Space - O(1) - third method
