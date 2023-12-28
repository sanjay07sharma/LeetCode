/*

Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
*/

/**
 * @param {number} x
 * @return {boolean}
 */

//solution 1

// number to array to string then compare.

var isPalindrome = function(x) {
    let arr = Array.from((x).toString());
    return (arr.toString() === (arr.reverse()).toString()) ? true : false
};


//solution 2

/**
 * @param {number} x
 * @return {boolean}
 */

// number to string to array to reverse to string to number.

var isPalindrome = function(x) {
    return parseInt((x.toString()).split('').reverse().join('')) === x ? true : false;
};
