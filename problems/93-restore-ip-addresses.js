
// 93. Restore IP Addresses

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    var l = s.length;
    if (l < 4 || l > 12) {
        return [];
    }

    var r = [];
    for (var i = 1; i <= 3; i++) { // i <= 3, i <= l-3
        var a = s.substr(0,i);
        if ((a.length > 1 && a[0] === '0') || parseInt(a) > 255) continue;

        for (var j = 1; j <= 3, i+j <= l-2; j++) {
            var b = s.substr(i,j);
            if ((b.length > 1 && b[0] === '0') || parseInt(b) > 255) continue;

            for (var k = 1; k <= 3, i+j+k <= l-1; k++) {
                var c = s.substr(i+j,k);
                if ((c.length > 1 && c[0] === '0') || parseInt(c) > 255) continue;

                var d = s.substr(i+j+k,l-i-j-k);
                if ((d.length > 1 && d[0] === '0') || parseInt(d) > 255) continue;

                r.push(`${a}.${b}.${c}.${d}`);
            }
        }
    }

    return r;
};
