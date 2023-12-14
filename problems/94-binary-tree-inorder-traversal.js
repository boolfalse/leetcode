
// 94. Binary Tree Inorder Traversal

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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var r = [];
    function traverse(t) {
        if (!t) return;
        traverse(t.left);
        r.push(t.val);
        traverse(t.right);
    }
    traverse(root)
    return r;
};
