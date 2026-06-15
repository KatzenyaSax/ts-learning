import {ListNode} from "../../../lib/lib"

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {

    let stack1:ListNode[] = [], stack2:ListNode[] = [];

    let ptrA = headA, ptrB = headB;
    while(ptrA!=null){
        stack1.push(ptrA);
        ptrA = ptrA.next;
    }
    while(ptrB!=null){
        stack2.push(ptrB);
        ptrB = ptrB.next;
    }

    let theSame = null;

    let limit = Math.min(stack1.length, stack2.length);

    for(let i=0; i<limit; i++){
        let node1:ListNode = stack1.pop() as ListNode;
        let node2:ListNode = stack2.pop() as ListNode;
        if(node1==node2) theSame = node1;
        else break;
    }

    return theSame;
};