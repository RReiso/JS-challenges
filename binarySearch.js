const binarySearch = (array, num) => {
  let left = 0;
  let right = array.length-1;

  while (left <= right){
    let middleIdx = Math.floor((left + right) / 2);

    if (array[middleIdx] === num){
      return middleIdx;
    }

    if (array[middleIdx] < num){
      left = middleIdx + 1
    }
    
    if (array[middleIdx] > num){
      right = middleIdx - 1
    }

  }
  return -1;
}

//Time - O(logn)
//Space - O(1)
