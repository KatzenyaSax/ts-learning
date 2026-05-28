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


function buildTree(nums: number[], begin: number, end: number) : TreeNode|null{
    //范围只有一个元素，直接返回这个元素为节点
    if(begin==end) return new TreeNode(nums[begin]);

    if(begin>end) return null;

    let mid = Math.floor((begin+end)/2) ;

    return new TreeNode(nums[mid], buildTree(nums, begin, mid-1), buildTree(nums, mid+1, end));
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
    return buildTree(nums, 0, nums.length-1);
};


console.log(sortedArrayToBST([-10,-3,0,5,9]));