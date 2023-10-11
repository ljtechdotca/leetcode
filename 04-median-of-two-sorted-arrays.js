// https://leetcode.com/problems/median-of-two-sorted-arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums = [...nums1, ...nums2].sort((a, b) => a - b);
    let mid = Math.floor(nums.length / 2);
    return nums.length % 2 != 0 ? nums[mid]: (nums[mid - 1] + nums[mid]) / 2;
};
