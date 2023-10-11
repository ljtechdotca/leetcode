// https://leetcode.com/problems/regular-expression-matching

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if (!p) return !s;
    const hasMatch = Boolean(s) && (p[0] === "." || p[0] === s[0]);
    if (p[1] === "*") return isMatch(s, p.slice(2)) || (hasMatch && isMatch(s.slice(1), p));
    return hasMatch ? isMatch(s.slice(1), p.slice(1)) : false;
};
