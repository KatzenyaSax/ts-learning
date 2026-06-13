
import {TreeNode} from "../../../lib/lib"

/**
 * 
 * @param root 
 * @param p 
 * @param q 
 * @returns 
 * 
 * 
 * 
 * 假如取任意一个节点root，它和p、q的关系无非只有三种：
 *      1.root的子树中已经有p与q（不论是在左子树还是右子树）
 *      2.root的子树中没有p与q
 *      3.root的子树中只有p、q的其中一个（只可能出现在其中一个子树）
 * 
 * 但是我们并没有分出是左子树还是右子树的情况，但是我们
 * 
 * 情况1：此时，最先成为这种情况的
 * 
 */

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {

    if(root==null || root==p || root==q) return root;

    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    if(left&&right) return root;

    if(left) return left;
    if(right) return right;

    return null;
};

