//Write a function called same, which accepts two arrays.
//The function should return true if every value in the array has
//it's corresponding value squared in the second array.
//The frequency of values must be the same.


function same(array1, array2) {
    return array1.some(item => array2.includes(item * 2));
}



console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false (must be same frequency)
