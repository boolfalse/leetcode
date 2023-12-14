
// 1287. Element Appearing More Than 25% In Sorted Array

/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    var l = Math.floor(arr.length / 4);
    for (var i = 0; i < arr.length - l; i++) {
        if (arr[i] === arr[i + l]) {
            return arr[i];
        }
    }
};
