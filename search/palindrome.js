const isPalindrome = (str) => {
    const revStr = str.split('').reverse();
    if (str.toLowerCase() === revStr.join('').toLowerCase()) {
        return true;
    }
    return false;
};

console.log(isPalindrome('oNis'));
console.log(isPalindrome('saiPpuakivikauppias'));


function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

console.log(bubbleSort([4, 8, 4, 9, 6, 3, 45, 6, 7, 8, 2, 4, 6, 1]));
