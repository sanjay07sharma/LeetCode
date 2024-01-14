/*
Given a string s, return the length of the longest substring between two equal characters,
excluding the two characters. If there is no such substring return -1.
A substring is a contiguous sequence of characters within a string.

 

Example 1:

Input: s = "aa"
Output: 0
Explanation: The optimal substring here is an empty substring between the two 'a's.
Example 2:

Input: s = "abca"
Output: 2
Explanation: The optimal substring here is "bc".
Example 3:

Input: s = "cbzxy"
Output: -1
Explanation: There are no characters that appear twice in s.
 

Constraints:

1 <= s.length <= 300
s contains only lowercase English letters.

*/


/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let vals = [];
     if ((new Set(s)).size === s.length) {
         return -1;
     }
     for (let i = s.length - 1; i >= 0; i--) {
         let x = 0
         while (x < i) {
             if (s[x] === s[i]) {
                 vals.push((i-x)-1);
             }
             x++;
         }
     }
     return Math.max(...vals)
 };

 /*
Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charIndexMap = new Map();
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        if (charIndexMap.has(s[end]) && charIndexMap.get(s[end]) >= start) {
            start = charIndexMap.get(s[end]) + 1;
        }

        charIndexMap.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};

/*

*/

// Solution 1

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const n = s.length;

    if (n <= 1) {
        return s;
    }

    let start = 0;
    let maxLength = 1;

    // Create a 2D array to store the results of subproblems
    const dp = Array.from({ length: n }, () => Array(n).fill(false));

    // All substrings of length 1 are palindromes
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    // Check substrings of length 2 or more
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;

            if (len === 2 && s[i] === s[j]) {
                dp[i][j] = true;
                start = i;
                maxLength = len;
            } else if (len > 2 && dp[i + 1][j - 1] && s[i] === s[j]) {
                dp[i][j] = true;
                start = i;
                maxLength = len;
            }
        }
    }

    return s.substring(start, start + maxLength);
};



// Optimized Solution

/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    let modifiedString = "^#" + s.split("").join("#") + "#$";
    let length = modifiedString.length;
    let palindromeLengths = new Array(length).fill(0);

    let center = 0, rightBoundary = 0;

    for (let i = 1; i < length - 1; i++) {
        palindromeLengths[i] = (rightBoundary > i) ?
            Math.min(rightBoundary - i, palindromeLengths[2 * center - i]) :
            0;

        while (modifiedString[i + 1 + palindromeLengths[i]] === modifiedString[i - 1 - palindromeLengths[i]]) {
            palindromeLengths[i]++;
        }

        if (i + palindromeLengths[i] > rightBoundary) {
            center = i;
            rightBoundary = i + palindromeLengths[i];
        }
    }

    // Find the maximum palindrome length and its center index
    let maxLength = Math.max(...palindromeLengths);
    let centerIndex = palindromeLengths.indexOf(maxLength);

    // Calculate start and end indices of the longest palindrome in the original string
    let start = Math.floor((centerIndex - maxLength) / 2);
    let end = start + maxLength;

    // Return the longest palindrome substring
    return s.substring(start, end);
};

/*
You are given a string s of even length. Split this string into two halves of equal lengths,
and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U').
Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.


Example 1:

Input: s = "book"
Output: true
Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
Example 2:

Input: s = "textbook"
Output: false
Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice.

Constraints:

2 <= s.length <= 1000
s.length is even.
s consists of uppercase and lowercase letters.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
function getVovelFromString(s) {
    return s.split('').filter(char => 'aeiouAEIOU'.includes(char)).length;
}
var halvesAreAlike = function(s) {
    let firstHalf = getVovelFromString(s.slice(0, Math.ceil(s.length / 2)));
    let secondHalf = getVovelFromString(s.slice(Math.ceil(s.length / 2)));

    return (firstHalf === secondHalf) ? true : false;
};


// Mathematical Solution

/**
 * @param {string} s
 * @return {boolean}
 */

var halvesAreAlike = function(s) {
    let res = 0;
    for (let i = 0; i<s.length; i++) {
        if (['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(s[i])) {
            if (i >= (s.length/2)) {
                res -= 1;
            } else {
                res += 1;
            }
        }
    }

    return res === 0;
};


/*
Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character,
and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.



Example 1:

Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"
Example 2:

Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
Example 3:

Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"


Constraints:

1 <= word1.length, word2.length <= 105
word1 and word2 contain only lowercase English letters.
*/

// JS 
// Logic was simply to check if the two strings have the same unique characters
// and the same frequency of each character.

function closeStrings(word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }

    const counts1 = new Map();
    const counts2 = new Map();

    for (const char of word1) {
        counts1.set(char, (counts1.get(char) || 0) + 1);
    }

    for (const char of word2) {
        counts2.set(char, (counts2.get(char) || 0) + 1);
    }

    const keys1 = Array.from(counts1.keys()).sort();
    const keys2 = Array.from(counts2.keys()).sort();

    if (keys1.join('') !== keys2.join('')) {
        return false;
    }

    const freq1 = Array.from(counts1.values()).sort();
    const freq2 = Array.from(counts2.values()).sort();

    return JSON.stringify(freq1) === JSON.stringify(freq2);
}

// Tried Python code:
// Logic was simply to check if the two strings have the same unique characters
// and the same frequency of each character.

// class Solution(object):
//     def closeStrings(self, word1, word2):
//         if len(word1) != len(word2):
//             return False
//         a,b = sorted(set(word1)),sorted(set(word2))
//         if a != b:
//             return False
//         count1,count2 = [],[]
//         for s1 in a:
//             count1.append(word1.count(s1))
//         for s2 in b:
//             count2.append(word2.count(s2))
//         if sorted(count1) == sorted(count2):
//             return True
