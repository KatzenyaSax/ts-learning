

import { TreeNode } from "../../../lib/lib";



function zigzagLevelOrder(root: TreeNode | null): number[][] {
    
    if(root==null) return [];
    if(root.left==null && root.right==null) return [[root.val]];

    let stack1 : TreeNode[] = [];
    let stack2 : TreeNode[] = [];
    stack1.push(root as TreeNode)

    let out : number[][] = [];

    while(stack1.length!=0 || stack2.length!=0){
        let outStack : TreeNode[];
        let inStack : TreeNode[];
        let level : number[] = [];
        let l2r : boolean, r2l:boolean;
        if(stack1.length==0 && stack2.length==0) break;
        if(stack1.length==0){   //如果stack1空，statck2不空，则遍历stack2，并将stack2中节点的子节点加入statck2，且说明这是从右往左
            r2l = true;
            l2r =false;
            outStack = stack2;
            inStack = stack1;
        } else {    //如果stack1不空，stack2空，则由stack1出节点，stack2入节点，且说明这是从左往右
            l2r = true;
            r2l = false;
            outStack = stack1;
            inStack = stack2;
        }
        while(outStack.length!=0){
            let node = outStack.pop() as TreeNode;
            level.push(node.val);
            if(r2l){
                if(node.right) inStack.push(node.right);
                if(node.left) inStack.push(node.left);
            } else if(l2r){
                if(node.left) inStack.push(node.left);
                if(node.right) inStack.push(node.right);
            }
        }
        out.push(level);
    }
    return out;
};