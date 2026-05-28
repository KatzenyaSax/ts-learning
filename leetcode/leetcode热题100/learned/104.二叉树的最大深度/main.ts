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


function maxDepth(root: TreeNode | null): number {
    if(root==null) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}







let tree = new TreeNode(1,
    new TreeNode(2, 
        new TreeNode(4, null, new TreeNode(5,
            null, null
        ))
    ),
    new TreeNode(3)
);

console.log(maxDepth(tree));