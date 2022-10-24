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
