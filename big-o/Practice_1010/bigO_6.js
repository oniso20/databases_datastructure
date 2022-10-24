function logAtLeast10(n) {
  for (let i = 1; i <= Math.max(n, 10); i++) {
    console.log(i);
  }
}

console.log(logAtLeast10(11));

// O(n) Time complexity
// O(1) Space Complexity