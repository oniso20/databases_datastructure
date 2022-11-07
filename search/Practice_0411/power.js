//Write  a  function  called  power  which  accepts  a  base  and  an  exponent.
//The  function should return the power of the base to the exponent.
//This function should mimic the functionality of
//Math.pow() – do not worry about negative bases and exponents.


function power(base, exponent) {

    if (exponent === 0) return 1;

    return base * power(base, exponent - 1);
}

function power2(base, exponent) {
    let total = 1;
    if (exponent === 0) return 1;

    for (let i = exponent; i >= 1; i--) {
        total *= base;
    }

    return total;
}


// console.log(power(2, 0)); // 1
// console.log(power(2, 2)); // 4
// console.log(power(7, 3)); // 343

console.log(power2(2, 0)); // 1
console.log(power2(2, 2)); // 4
console.log(power2(7, 3)); // 343
