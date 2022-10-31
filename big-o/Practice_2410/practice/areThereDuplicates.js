//Write a function called areThereDuplicates which accepts a variable number of arguments,
//and checks whether there are any duplicates among the arugments passed in.
//You can solve this using the frequency counter pattern OR the multiple pointers pattern.
//Restrictions: Time - O(n), Space - O(n)

const areThereDuplicates = (num1, num2, num3) => {
    return num1 === num2 || num1 === num3 || num2 === num3 ? console.log(true) : console.log(false);
};


areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true


