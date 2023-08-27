/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let answer = parseInt(x.toString().split("").reverse().join("")) * Math.sign(x);
    return answer > -2147483649 && answer < 2147483649 ? answer : 0;
};
