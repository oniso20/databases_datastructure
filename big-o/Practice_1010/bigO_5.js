function logAtMost10(n) {
  for (let i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}

console.log(logAtMost10(11));

// O(n) Time complexity
// O(1) Space Complexity