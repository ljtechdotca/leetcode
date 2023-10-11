// https://leetcode.com/problems/string-to-integer-atoi

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();

    if (s.length == 0) return 0;

    let answer = 0;
    let index = 0;
    let sign = 1;

    if (s[index] == "+") {
        index++;
    } else if (s[index] == "-") {
        index++;
        sign = -1;
    }

    while (index < s.length && /^\d$/.test(s[index])) {
        answer = answer * 10 + parseInt(s[index]);
        index++;
    }

    answer *= sign;
    answer = Math.max(Math.min(answer, Math.pow(2, 31) - 1), -Math.pow(2, 31));

    return answer;
};
