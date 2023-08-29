// https://leetcode.com/problems/palindrome-number

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (Math.sign(x) == -1) return false;
    let answer = true;
    let s = x.toString();
    let j = s.length - 1;
    for (let i = 0; i < j; i++) {
        if (s[i] != s[j]) {
            answer = false;
            break;
        }
        j--;
    }
    return answer;
};
