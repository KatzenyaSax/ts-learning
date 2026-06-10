
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?:TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

class TreeNodeQueue{    //队列
    nodes: (TreeNode|null)[] = [];
    bottom: number = 0;     //队列首部
    top: number = 0;        //队列尾部

    enqueue(node:TreeNode|null){
        this.nodes[this.top++] = node; 
    }

    dequeue():TreeNode|null{
        let temp = this.nodes[this.bottom];
        this.bottom++;
        return temp;
    }

    isEmpty():boolean{
        return this.bottom==this.top;
    }
}

function levelOrder(root: TreeNode | null): number[][]{
    if(root==null) return [];

    let queue : TreeNodeQueue = new TreeNodeQueue();

    queue.enqueue(root);
    queue.enqueue(null);

    let out : number[][]= [];

    let level : number[] = [];

    while(!queue.isEmpty()){
        let node = queue.dequeue();
        if(node?.left) queue.enqueue(node.left);
        if(node?.right) queue.enqueue(node.right);
        if(!node){
            if(!queue.isEmpty()){
                queue.enqueue(null);
            }
            out.push(level);
            level = [];
            continue;
        }
        level.push(node.val);
    }
    return out;
}

console.log(levelOrder(
    new TreeNode(1,
        new TreeNode(2,
            new TreeNode(4),
            new TreeNode(5)
        ),
        new TreeNode(3)
    )
));