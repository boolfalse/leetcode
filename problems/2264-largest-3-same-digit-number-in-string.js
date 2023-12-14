
// 2264. Largest 3-Same-Digit Number in String

/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    var m = '';
    for (var i = 0; i < num.length-2; i++) {
        if (num[i] === num[i+1]) {
            if (num[i] === num[i+2]) {
                if (m < parseInt(num[i]) || m === '') {
                    m = parseInt(num[i]);
                }
                i++;
            }
            i++;
        }
    }
    return m === '' ? '' : `${m}${m}${m}`;
};
