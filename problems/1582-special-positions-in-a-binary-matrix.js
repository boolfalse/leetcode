
// 1582. Special Positions in a Binary Matrix

/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    var c = {};
    for (var i = 0; i < mat.length; i++) {
        for (var j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 1) {
                if (Object.hasOwn(c, j)) {
                    c[j].push(i);
                } else {
                    c[j] = [ i ];
                }
            }
        }
    }
    var p = {};
    for (var k in c) {
        if (Object.hasOwn(c, k)) {
            if (c[k].length === 1) {
                p[c[k][0]] = !Object.hasOwn(p, c[k][0]);
            } else {
                for (var t = 0; t < c[k].length; t++) {
                    p[c[k][t]] = false;
                }
            }
        }
    }
    var s = 0;
    for (var l in p) {
        if (Object.hasOwn(p, l)) {
            if (p[l] === true) {
                s++;
            }
        }
    }
    return s;
};
