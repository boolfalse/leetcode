
// 1464. Maximum Product of Two Elements in an Array

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var m = 0, t = 0;
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            t = (nums[i]-1)*(nums[j]-1);
            if (m < t) {
                m = t;
            }
        }
    }
    return m;
};
