
// 606. Construct String from Binary Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var tree2str = function(root) {
    var s = root.val.toString();
    var e = false;
    if (root.left) {
        var l = tree2str(root.left);
        s += `(${l})`;
    } else {
        e = true;
    }
    if (root.right) {
        var r = tree2str(root.right);
        if (e) { s += '()'; }
        s += `(${r})`;
    }
    return s;
};
