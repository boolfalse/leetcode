
// 867. Transpose Matrix

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    var r = [];
    for (var j = 0; j < matrix[0].length; j++) {
        var t = [];
        for (var i = 0; i < matrix.length; i++) {
            t[i] = matrix[i][j];
        }
        r.push(t);
    }
    return r;
};
