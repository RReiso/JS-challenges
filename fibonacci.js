// Find value at n.

const fibonacciValue = (n) => {
  // if (n <= 1) return n;
  // return fibonacciValue(n - 1) + fibonacciValue(n - 2);
  
  // Time - O(2^n) - for every n, you are calling two functions, exponential growth, doubles at every step, opposite of log
  // Space O(n) - memory on callstack, max n calls at a stack at a time, depends on max depth

  const hasht = { 0: 0, 1: 1 };
  if (n in hasht) {
    return hasht[n];
  } else {
    hasht[n] = fibonacciValue(n - 1) + fibonacciValue(n - 2);
    return hasht[n];
  }
  // Time - O(n) - max n-2 calls. To calculate F(5), you need F(4), F(3), F(2). F(1), F(0) already in the hashtable.
  // Space - O(n)
};

