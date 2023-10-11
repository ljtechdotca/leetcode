// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const checkPalindrome = (s, i, j) => {
        while (i < j) {
            if (s[i] != s[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
    let longest = 0;
    let k = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (checkPalindrome(s, i, j)) {
                if (j - i + 1 > longest) {
                    longest = j - i + 1;
                    k = i;
                }
            }
        }
    }
    return s.substring(k, k + longest);
};
