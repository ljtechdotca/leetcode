// https://leetcode.com/problems/container-with-most-water

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0, j = height.length - 1, max = 0;
    while (i < j) {
        let w = j - i;
        let h = Math.min(height[i], height[j]);
        let area = w * h;
        max = Math.max(max, area);
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return max;
};
