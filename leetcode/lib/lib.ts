export class ListNode{
    val: number;
    next : ListNode | null;

    constructor(v: number, n : ListNode | null){
        this.val = !v ? 0 : v;
        this.next = n != undefined ? n : null;
    }
};

export function printList(head :ListNode|null){
    let str : string = "";
    let ptr = head;
    while(ptr!=null){
        str+=ptr.val;
        str+=" -> ";
        ptr = ptr?.next;
    }
    str+="null";
    console.log(str);
};

export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?:TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

export function printTree(root: TreeNode | null): void {
    if (!root) { console.log("null"); return; }

    const lines: string[] = [];

    function traverse(node: TreeNode | null, prefix: string, isLeft: boolean): void {
        if (!node) return;
        // 左子树（打印在上方）
        traverse(node.left, prefix + (isLeft ? "    " : "│   "), true);
        // 当前节点
        lines.push(prefix + (isLeft ? "┌── " : "└── ") + node.val);
        // 右子树（打印在下方）
        traverse(node.right, prefix + (isLeft ? "│   " : "    "), false);
    }

    // 根节点的左子树（上方）
    traverse(root.left, "", true);
    // 根节点本身
    lines.push(String(root.val));
    // 根节点的右子树（下方）
    traverse(root.right, "", false);

    console.log(lines.join("\n"));
}