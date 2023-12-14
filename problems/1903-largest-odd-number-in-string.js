
// 1903. Largest Odd Number in String

/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    var nl = num.length;
    if (nl > 2) {
        var r = 0;
        for (var l = 1; l <= nl; l++) {
            var m = num.substr(0,l);
            if (parseInt(m.slice(-1)) % 2 === 1) {
                r = m;
            }
        }
        return r === 0 ? '' : r.toString();
    } else if (nl === 2) {
        return parseInt(num) % 2 === 0 ? (
            parseInt(num.substr(0,1)) % 2 === 0 ? '' : num.substr(0,1)
        ) : num;
    } else {
        return parseInt(num) % 2 === 0 ? '' : num;
    }
};
