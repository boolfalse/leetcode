
// 1266. Minimum Time Visiting All Points

/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
    var c = 0;
    for (var i = 0; i < points.length - 1; i++) {
        var x = points[i][0] - points[i+1][0];
        var y = points[i][1] - points[i+1][1];
        if (x > 0) {
            c += y > 0 ? (x > y ? x : y) : (x > 0-y ? x : 0-y);
        } else {
            c += y > 0 ? (0-x > y ? 0-x : y) : (x > y ? 0-y : 0-x);
        }
    }
    return c;
};
