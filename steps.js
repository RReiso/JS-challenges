const steps = (st) => {
  let result = "";

  for (let i = 1; i <= st; i++) {
    let row = "'";

    for (let j = 1; j <= i ; j++) {
      row += "#";
    }
    for (let j = 1; j <= st - i; j++) {
      row += " ";
    }

    // row+="#".repeat(i);
    // row+=" ".repeat(st-i);
    
    row += `'\n`;
    result+=row
  }
  return result;
};

//Time - O(n^2)
//Space - O(n)
