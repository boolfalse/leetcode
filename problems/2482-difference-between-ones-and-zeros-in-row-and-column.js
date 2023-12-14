
// 2482. Difference Between Ones and Zeros in Row and Column

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    var cols = {}, rows = {};
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (Object.hasOwn(rows, i)) {
                if (grid[i][j] === 1) {
                    rows[i] += 1;
                } else {
                    rows[i] -= 1;
                }
            } else {
                if (grid[i][j] === 1) {
                    rows[i] = 1;
                } else {
                    rows[i] = -1;
                }
            }
            if (Object.hasOwn(cols, j)) {
                if (grid[i][j] === 1) {
                    cols[j] += 1;
                } else {
                    cols[j] -= 1;
                }
            } else {
                if (grid[i][j] === 1) {
                    cols[j] = 1;
                } else {
                    cols[j] = -1;
                }
            }
        }
    }
    var diff = [];
    for (i = 0; i < grid.length; i++) {
        var diffRow = [];
        for (j = 0; j < grid[0].length; j++) {
            diffRow.push(rows[i] + cols[j]);
        }
        diff.push(diffRow);
    }
    return diff;
};
