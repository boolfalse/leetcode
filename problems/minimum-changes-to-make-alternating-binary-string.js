
// 1758. Minimum Changes To Make Alternating Binary String

/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    var a = 0, b = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            if (i%2 === 0) { b++; } else { a++; }
        } else {
            if (i%2 === 0) { a++; } else { b++; }
        }
    }
    return a < b ? a : b;
};
