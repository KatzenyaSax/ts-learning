import {buildList, ListNode, printList} from "../../../lib/lib"



function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {

    if(!head) return null;

    //顺序存储节点
    let stack:ListNode[] = [];

    //
    let ptr:ListNode|null = head;
    while(ptr!=null){
        stack.push(ptr);
        ptr = ptr.next;
    }

    let len = stack.length;

    //如果n大于链表长度，不管
    if(n>len) return head;

    //倒数第n个节点，即node=stack[len-n]，接下来考虑node前面还有没有节点

    if(n==len) return head.next;

    else{
        stack[len-n-1].next = stack[len-n].next;
        stack[len-n].next = null;
    }

    return head;
};


printList(removeNthFromEnd(buildList([1,2]), 2));