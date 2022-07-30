const swapEl = (arr, x, y) =>{
  const temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

const bubble = (arr) => {
 for (let i = 0; i < arr.length; i++){
   for (let j = 0; j < arr.length - i; j++){
     if (arr[j] > arr[j + 1]){
       swapEl(arr, j, j + 1)
     }
   }
 }
 return arr;
}

//Time - O(n^2)
//Space - 0(1)


const bubbleSort = (arr) => {
  let sorted = false;
  let counter = 0;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - 1 - counter; i++) { // arr.length-1 because we compare i with 1+1
      if (arr[i] > arr[i + 1]) {
        swap(arr, i);
        sorted = false;
      }
    }
  }
  return arr;
};

const swap = (arr, i) => {
  let temp = arr[i];
  arr[i] = arr[i + 1];
  arr[i + 1] = temp;
};

console.log(bubbleSort([2, 4, 6, 1, 3, 5]));

// Time - 0(n^2)
// Space - O(1)
