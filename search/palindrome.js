const isPalindrome = (str) => {
    const revStr = str.split('').reverse();
    if (str.toLowerCase() === revStr.join('').toLowerCase()) {
        return true;
    }
    return false;
};

console.log(isPalindrome('oNis'));
console.log(isPalindrome('saiPpuakivikauppias'));