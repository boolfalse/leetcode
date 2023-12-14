
// 1716. Calculate Money in Leetcode Bank

/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    var k=Math.floor(n/7),c=n-k*7;
    return 7*k*(k-1)/2+28*k+c*k+c*(c+1)/2;
};
