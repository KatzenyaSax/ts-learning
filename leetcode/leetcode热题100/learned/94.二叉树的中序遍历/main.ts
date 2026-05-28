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
 * 
 * @param root 
 * @param finale 
 * @returns 
 * 
 * 递归法
 */
function inorder(root:TreeNode|null, finale:number[]) : void{
    if(root == null){
        return;
    }
    inorder(root.left, finale);
    finale.push(root.val);
    inorder(root.right, finale);
}


function inorderTraversal(root: TreeNode | null): number[] {
    let finale : number[] = [];
    

    //递归法
    //inorder(root, finale);

    //迭代法，需要手动维护stack
    let stack : TreeNode[] = [];
    let max = 1;
    while(root || stack.length!=0){     //当stack还有root时，说明没遍历完，要继续遍历
        while(root){
            stack.push(root);
            max = max > stack.length?max:stack.length;
            root = root.left;
        }
        /**
         * 为什么将root存入stack？
         * 原因在于中序遍历是从左子树回到root时，root才读取
         * 而上面那个循环中，是从root下到左子树，但是root未读取，所以要存入stack才能防止丢失
         * 
         */

        //当本次root为null时，说明到了左子树的极限了，此时从stack中拿取上一个root读数
        root = stack.pop() as TreeNode;
        finale.push(root.val);

        //到当前root的右子树，继续不断遍历左子树的循环
        root = root.right;
        
    }
    

    return finale;
};

function preTraversal(root: TreeNode | null): number[] {
    let finale : number[] = [];

    let stack : TreeNode[] = [];

    while(root || stack.length){
        while(root){
            //立即读
            finale.push(root.val);
            //去左子树，在此之前需要把root压入栈，以便后续查找子节点
            stack.push(root);
            root = root.left;
        }

        root = stack.pop() as TreeNode;

        root = root.right;

    }


    return finale;
}


function postTraversal(root: TreeNode | null): number[] {
    let finale : number[] = [];
    let stack : TreeNode[] = [];
    //反转先序法：将一般的线序根->左->右改写为根->右->左，然后结果反转，结果就是左->右->跟
    while(root || stack.length){
        while(root){
            finale.push(root.val);
            stack.push(root);
            root = root.right;
        }
        root = stack.pop() as TreeNode;
        root = root.left;
    }
    return finale.reverse();
}


let tree = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(3),new TreeNode(4)
    ),
    new TreeNode(5,
        new TreeNode(6),new TreeNode(7)
    )
)

console.log(preTraversal(tree));

console.log(inorderTraversal(tree));

console.log(postTraversal(tree));