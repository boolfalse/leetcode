
// 661. Image Smoother

/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    var smooth = [];

    var n = img.length, m = img[0].length;

    if (n === 1) {
        if (m === 1) {
            smooth.push([ img[0][0] ]);
        } else {
            var s = [ Math.floor((img[0][0] + img[0][1])/2) ];
            for (var k = 1; k < m - 1; k++) {
                s.push(Math.floor((img[0][k-1] + img[0][k] + img[0][k+1])/3));
            }
            s.push(Math.floor((img[0][m-2] + img[0][m-1])/2));
            smooth.push(s);
        }
    } else {
        if (m === 1) {
            smooth.push([ Math.floor((img[0][0] + img[1][0])/2) ]);
            for (var t = 1; t < n - 1; t++) {
                smooth.push([ Math.floor((img[t-1][0] + img[t][0] + img[t+1][0])/3) ]);
            }
            smooth.push([ Math.floor((img[n-2][0] + img[n-1][0])/2) ]);
        } else {
            var r = [ Math.floor((img[0][0] + img[0][1] + img[1][0] + img[1][1])/4) ];
            for (var j = 1; j < m - 1; j++) {
                r.push(Math.floor((img[0][j-1] + img[0][j] + img[0][j+1] + img[1][j-1] + img[1][j] + img[1][j+1])/6));
            }
            r.push(Math.floor((img[0][m-2] + img[0][m-1] + img[1][m-2] + img[1][m-1])/4));
            smooth.push(r);

            for (var i = 1; i < n - 1; i++) {
                r = [];
                for (j = 0; j < m; j++) {
                    if (j === 0) {
                        r.push(Math.floor((img[i-1][0] + img[i-1][1] + img[i][0] + img[i][1] + img[i+1][0] + img[i+1][1])/6));
                    } else if (j === m-1) {
                        r.push(Math.floor((img[i-1][m-2] + img[i-1][m-1] + img[i][m-2] + img[i][m-1] + img[i+1][m-2] + img[i+1][m-1])/6));
                    } else {
                        r.push(Math.floor((img[i-1][j-1] + img[i-1][j] + img[i-1][j+1] + img[i][j-1] + img[i][j] + img[i][j+1] + img[i+1][j-1] + img[i+1][j] + img[i+1][j+1])/9));
                    }
                }
                smooth.push(r);
            }

            r = [ Math.floor((img[n-2][0] + img[n-2][1] + img[n-1][0] + img[n-1][1])/4) ];
            for (j = 1; j < m - 1; j++) {
                r.push(Math.floor((img[n-2][j-1] + img[n-2][j] + img[n-2][j+1] + img[n-1][j-1] + img[n-1][j] + img[n-1][j+1])/6));
            }
            r.push(Math.floor((img[n-2][m-2] + img[n-2][m-1] + img[n-1][m-2] + img[n-1][m-1])/4));
            smooth.push(r);
        }
    }

    return smooth;
};
