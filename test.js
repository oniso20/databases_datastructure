var maximum69Number = function (num) {
    let numArray = toString(num).split('');
    numArray.forEach(item => {
        if (item < 9) {
            item = 9;
        }
    });
    return numArray.join('');
};
