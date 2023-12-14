
// 1688. Count of Matches in Tournament

/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let m = 0;
    while (n > 1) {
        m += Math.floor(n/2);
        n = Math.ceil(n/2);
    }
    return m;
};