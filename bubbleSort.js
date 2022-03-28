const swap = (arr, x, y) =>{
  const temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

const bubble = (arr) => {
 for (let i = 0; i < arr.length; i++){
   for (let j = 0; j < arr.length - i; j++){
     if (arr[j] > arr[j + 1]){
       swap(arr, j, j + 1)
     }
   }
 }
 return arr;
}

//Time - O(n^2)
//Space - 0(1)
