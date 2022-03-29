const selectionSort = (arr) =>{

  for (let i = 0; i < arr.length; i++){
    let curr = arr[i];
    let idxOfMin = i;
    for (let j = i + 1; j < arr.length; j++){
      if (curr > arr[j]) {
        curr = arr[j];
        idxOfMin = j;
      }
    }
    arr[idxOfMin] = arr[i];
    arr[i] = curr;
  }
  return arr;
}

// Time - O(n^2)
// Space - O(1)
