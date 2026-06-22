import {TreeNode,printTree} from "../../../lib/lib"



let max = -10000;

function maxContribute(root:TreeNode|null):number{
    if(!root) return 0;

    //1.先计算左右子节点的贡献
    let left = Math.max(maxContribute(root.left),0);
    
    let right = Math.max(maxContribute(root.right),0);


    //2.计算这个点的总贡献
    let thisContribute = left+right+root.val;

    //3.更新max
    max = Math.max(max, thisContribute);

    //4.返回
    return root.val+Math.max(left, right);
}

function maxPathSum(root: TreeNode | null): number {

    maxContribute(root);

    return max;
};

