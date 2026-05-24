/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode{
    val: number;
    next : ListNode | null;

    constructor(v: number, n : ListNode | null){
        this.val = !v ? 0 : v;
        this.next = n != undefined ? n : null;
    }
};

function reverseList(head: ListNode | null): ListNode | null {

    let ptr : ListNode | null = null;

    while(head != null){
        let temp : ListNode = new ListNode(head.val, ptr);
        ptr = temp;
        head = head.next;
    }


    return ptr;
    
};