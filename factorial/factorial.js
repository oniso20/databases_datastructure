function sumRange(num) {
    if (num === 1) return 1;

    return num + sumRange(num - 1);
}
console.log(sumRange(5));

function factorial(num) {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i;
    }
    return total;
}

console.log(factorial(5));

function factorial2(num) {
    if (num === 1) return 1;

    return num * factorial2(num - 1);
}

console.log(factorial2(5));