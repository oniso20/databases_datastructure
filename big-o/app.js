function addUpTo(n) {
    let t1 = performance.now();
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    let t2 = performance.now();
    console.log("Time used", t2 - t1);
    return total;
}

function addUpTo2(n) {
    let t1 = performance.now();
    let ans = n * (n + 1) / 2;
    let t2 = performance.now();
    console.log("Time used", t2 - t1);
    return ans;
}

console.log(addUpTo(10000000));
console.log(addUpTo2(10000000));

// Frequency counter

Examples:

function areThereDuplicates(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[i]) {
                return true;
            }
        }
    }
}

console.log(areThereDuplicates([1, 2, 3])); // false
console.log(areThereDuplicates([1, 2, 2])); // true