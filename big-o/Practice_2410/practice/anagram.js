//Given two strings, write a function to determine if the second string is an anagram
//of the first.

//An anagram is a word, phrase, or name formed by rearranging the letters of another,
//such as cinema, formed from iceman.

// Time complexity - O(n)


function validAnagram(str1, str2) {
    str1 = str1.toLowerCase().split();
    str2 = str2.toLowerCase().split();
    for (let i = 0; i < str1.length; i++) {
        if (str1[i].includes(str2)) {
            return console.log(true);
        } else { return console.log(false); }
    }
}

validAnagram('', ''); // true
validAnagram('aaz', 'zza'); // false
validAnagram('anagram', 'nagaram'); // true
validAnagram("rat", "car"); // false) // false