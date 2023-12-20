
// 2706. Buy Two Chocolates

/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    var l = -1;
    for (var i = 0; i < prices.length - 1; i++) {
        for (var j = i+1; j < prices.length; j++) {
            if (money - prices[i] - prices[j] > l) {
                l = money - prices[i] - prices[j];
            }
        }
    }
    return l >= 0 ? l : money;
};
