const revPolishNotation = (arrOfStrings) => {
  let stack = [];
  const operators = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => Math.trunc(x / y),
  };

  for (const el of arrOfStrings) {
    if (el in operators) {
      const y = stack.pop();
      const x = stack.pop();
      const operation = operators[el];
      const result = operation(x, y);
      stack.push(result);
    } else {
      stack.push(parseInt(el));
    }
  }

  return stack.pop();
};

console.log(revPolishNotation(["4", "13", "5", "/", "+"]));

// Time - O(n)
// Space - O(n)
