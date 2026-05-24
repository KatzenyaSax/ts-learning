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

function isPalindrome(head: ListNode | null): boolean {
    
    let list : number[] = [];

    while(head != null){
        list.push(head.val);
        head = head.next;
    }


    let i : number = 0;
    let j : number = list.length - 1;

    while(j > i){
        if(list[i] != list[j]){
            return false;
        }
        i ++;
        j --;
    }


    return true;

};




let head : ListNode = new ListNode(1,
    new ListNode(2,
        new ListNode(2,
            new ListNode(1,
                null
            )
        )
    )
);

console.log(isPalindrome(head));