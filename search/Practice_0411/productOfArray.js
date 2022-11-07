//Write a func,on called productOfArray which takes in array
//of numbers and returns the product of them all .

// HINT: array method e.g. slice

function productOfArray(arr) {
    // return console.log(arr.reduce((prev, curr) => prev * curr));

    if (arr.length < 1) return 1;
    return arr[0] * productOfArray(arr.slice(1));

}


console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60