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


function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {

    let ptrA : ListNode | null = headA;
    let ptrB : ListNode | null = headB;

    /**
     * 所谓交叉：即next指向的是同一个地址
     * 
     */

    let set = new Set<ListNode | null>();

    while(ptrA != null){
        set.add(ptrA);
        ptrA = ptrA.next;
    }

    while(ptrB != null){
        if(set.has(ptrB)){
            return ptrB;
        } else {
            ptrB = ptrB.next;
        }
    }

    return null;
};


