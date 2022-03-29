const merge =  (arr1, arr2) => {
  let res = [];
  let p1 = 0
  let p2 = 0

  for (let i = 0; i < arr1.length + arr2.length; i++) {

    if (arr1[p1] < arr2[p2]) {
      res.push(arr1[p1]);
      p1++;
    } else if (arr1[p1] >= arr2[p2]) {
      res.push(arr2[p2])
      p2++
    }
  }

  while (p1 < arr1.length) {
    res.push(arr1[p1]);
    p1++;
  }

  while (p2 < arr2.length) {
    res.push(arr2[p2]);
    p2++;
  }

  return res;
}

// Time - O(n)
// Space - O(1)
