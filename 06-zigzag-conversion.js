// https://leetcode.com/problems/zigzag-conversion

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows == 1) {
        return s;
    }

    let answer = "";
    let length = s.length;
    let step = 2 * numRows - 2;
    
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j + i < length; j += step) {
            answer += s[j + i];
            if (i != 0 && i != numRows - 1 && j + step - i < length) {
                answer += s[j + step - i];
            }
        }
    }

    return answer;
};
