
// 1160. Find Words That Can Be Formed by Characters

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    var r = 0;
    var co = {};
    for (var j = 0; j < chars.length; j++) {
        if (Object.hasOwn(co, chars[j])) {
            co[chars[j]] = co[chars[j]] + 1;
        } else {
            co[chars[j]] = 1;
        }
    }

    for (var i = 0; i < words.length; i++) {
        var rt = 0;
        var cot = {};
        for (var k = 0; k < words[i].length; k++) {
            if (Object.hasOwn(co, words[i][k])) {
                if (Object.hasOwn(cot, words[i][k])) {
                    if (cot[words[i][k]] === 0) {
                        rt = 0;
                        break;
                    }
                    cot[words[i][k]] = cot[words[i][k]] - 1;
                } else {
                    cot[words[i][k]] = co[words[i][k]] - 1;
                }
                rt += 1;
            } else {
                rt = 0;
                break;
            }
        }
        r += rt;
    }

    return r;
};
