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

class TreeNodeQueue{
    //null表示这一层完结了
    nodes: (TreeNode|null)[] = [];
    head: number = 0;
    tail: number = 0;


    // 入队，tail增加
    enqueue(node: TreeNode|null){
        if(node ==null){
            this.nodes[this.tail] = null;
            this.tail ++;
            return;
        }
        this.nodes[this.tail] = node;
        this.tail ++;
    }
    //出队，head后移，返回nodes[head]
    dequeue() : TreeNode|null{
        let index= this.head ++;
        return this.nodes[index];
    }

    isEmpty():boolean{
        return (this.head == this.tail);
    }
    
}


function levelOrder(root: TreeNode | null): number[][]{

    
    if(!root) return [];
    
    let finale : number[][] = [];
    let level = 0;
    let tempArr : number[] = [];

    //queue存root
    let queue = new TreeNodeQueue();
    queue.enqueue(root);
    queue.enqueue(null);

    //开始遍历
    while(!queue.isEmpty()){
        let node = queue.dequeue();
        
        //console.log(node?.val+" => "+ (node?.left==null?"null":node?.left?.val) + " &" +(node?.right==null?"null":node?.right?.val));

        if(node==null){     //这一层完结，入队一个null
            finale[level] = tempArr;
            tempArr = [];
            level ++;
            if(!queue.isEmpty()){
                queue.enqueue(null);
            }
        } else {
            tempArr.push(node.val);
            if(node.left) queue.enqueue(node.left);
            if(node.right) queue.enqueue(node.right);
        }
    }

    return finale;
};




let tree = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(3),
        new TreeNode(3)
    ),
    new TreeNode(2,
        null,
        new TreeNode(3)
    )
);

console.log(levelOrder(tree));