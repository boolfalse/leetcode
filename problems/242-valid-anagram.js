
// 242. Valid Anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    var c = {}, q = 0;
    for (var i = s.length - 1; i >= 0; i--) {
        if (Object.hasOwn(c, s[i])) {
            c[s[i]] += 1;
        } else {
            q++;
            c[s[i]] = 1;
        }
    }
    i++;
    while(i < t.length) {
        if (Object.hasOwn(c, t[i])) {
            c[t[i]] -= 1;
            if (c[t[i]] === 0) {
                q--;
            }
            if (q === 0) {
                return true;
            }
        }
        i++;
    }
    return false;
};
