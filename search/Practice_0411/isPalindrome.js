//Write a recursive func,on called isPalindrome which returns true if the string passed
//to it is a palindrome (reads the same forward and backward).
//Otherwise it returns false.

function isPalindrome(str) {
    const revStr = str.split('').reverse();
    if (str.toLowerCase() === revStr.join('').toLowerCase()) {
        return true;
    }
    return false;
}

function isPalindrome2(str) {

    let strLen = str.length;
    if (strLen === 0 || strLen === 1) {
        return true;
    }
    if (str[0] === str[strLen - 1]) {
        console.log(str.slice(1, strLen - 1));
        return isPalindrome(str.slice(1, strLen - 1));
    }
    return false;
}
