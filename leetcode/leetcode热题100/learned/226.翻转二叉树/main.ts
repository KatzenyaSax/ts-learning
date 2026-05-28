class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function invertTree(root: TreeNode | null): TreeNode | null {
    //边界条件
    if(!root) return root;

    /**
     * 就用invertTree方法进行递归
     * 假设现在在二叉树的某个节点 root 上，那么要将root的左右交换，前提是 root 的左右子树也进行了交换
     * 
     * 当然，在递归的时候不要考虑更底层的子问题，只需要只要每一层标准的做法就行了，剩下的就让算法自动搞吧
     * 
    */

    let right = invertTree(root.left);
    let left = invertTree(root.right);

    root.left = left;
    root.right = right;

    return root;
};