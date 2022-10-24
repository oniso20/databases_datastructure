function subtotals(array) {
  let subtotalArray = Array(array.length);
  for (let i = 0; i < array.length; i++) {
    let subtotal = 0; for (let j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}
// O(n^2) Time complexity
// O(n) Space Complexity

function subtotals2(array) {
  let newArray = [];
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total = array[i] + total;
    newArray.push(total);
  }
  return newArray;
}

function subtotals3(array) {
  let newArray = [];
  let total = 0;
  array.forEach(item => {
    total = item + total;
    newArray.push(total);
  });
  return newArray;
}

console.log(subtotals([1, 2, 3, 4, 5]));
console.log(subtotals2([1, 2, 3, 4, 5]));
console.log(subtotals3([1, 2, 3, 4, 5]));

// O(n) Time complexity for the last 2
// O(n) Space Complexity

