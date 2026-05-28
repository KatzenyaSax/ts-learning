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

/**
 * 错误解法之 I：用栈push/pop元素，左右子树翻转遍历
 * 
 * 遇到[1,2,2,2,null,2,null] 就露馅
 * 
 * 而且还有leetcode编译器和本地编译器输出不一样的问题
 * 
 * 
 * 正确解法-递归：让左子树的左子树与右子树的右子树对比；让左子树的右子树与右子树的左子树对比
 * 
 */

function isMirror(left:TreeNode|null, right:TreeNode|null) : boolean{

    //如果两棵子树均为空，对称
    if(!left && !right) return true;

    //只有一棵子树为空，则一定不对称
    if((!left && right)||(left && !right)) return false;

    return left?.val==right?.val && isMirror(left?.right as TreeNode|null, right?.left as TreeNode|null) && isMirror(left?.left as TreeNode|null, right?.right as TreeNode|null);

}


function isSymmetric(root: TreeNode | null): boolean {
    /**
     * 对于root，判断子树是否为对称
     */

    return isMirror(root, root);
};


























let tree1 = new TreeNode(1,
    new TreeNode(2,
        null,
        new TreeNode(3)
    ),
    new TreeNode(2,
        null,
        new TreeNode(3)
    )
);

let tree2 = new TreeNode(1,
    new TreeNode(2, new TreeNode(2), null),
    new TreeNode(2, new TreeNode(2), null)
);

//console.log(isSymmetric(tree1));

console.log(isSymmetric(tree2));