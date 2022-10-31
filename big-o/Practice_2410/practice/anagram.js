//Given two strings, write a function to determine if the second string is an anagram
//of the first.

//An anagram is a word, phrase, or name formed by rearranging the letters of another,
//such as cinema, formed from iceman.

// Time complexity - O(n)


function validAnagram(str1, str2) {
    str1 = str1.toLowerCase().split('').sort((a, b) => a.localeCompare(b));
    str2 = str2.toLowerCase().split('').sort((a, b) => a.localeCompare(b));
    return str1.join('') === str2.join('') ? console.log(true) : console.log(false);
}

validAnagram('', ''); // true
validAnagram('aaz', 'zza'); // false
validAnagram('anagram', 'nagaram'); // true
validAnagram("rat", "car"); // false) // false