
// 1436. Destination City

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    var c = {}, l = paths.length;
    for (var i = 0; i < l; i++) {
        c[paths[i][0]] = paths[i][1];
    }
    for (i = 0; i < l; i++) {
        var t = paths[i][0], s = 0;
        while(c[t]) {
            s++;
            t = c[t];
        }
        if (s === l) {
            return t;
        }
    }
};
