
// 1913. Maximum Product Difference Between Two Pairs

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    var s = nums.sort((a,b) => a-b);
    return s[nums.length-1] * s[nums.length-2] - s[1] * s[0];
};
