
class ListNode{
    val: number;
    next : ListNode | null;

    constructor(v: number, n : ListNode | null){
        this.val = !v ? 0 : v;
        this.next = n != undefined ? n : null;
    }
};

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    
    /**
     *   
     * 
     *  1 -> 2 -> 3 -> 4 -> 5
     *  ^
     *  |
     * headPtr -> 1(headPtr.next)
     * 
     *  
     * 
     * 
     * 
     * 
     * 
     */

    let headPtr = new ListNode(0, head);
    
    let kHead = headPtr;
    let kEnd = head;

    for(let i=0; i< k-1; i++){
        console.log("val: "+head?.val);
        let ptr1 = headPtr.next;
        let ptr2 = head;
        head = head!.next;
        ptr2!.next = ptr1 as ListNode;
        kHead.next = ptr2;
    }

    kEnd!.next = kHead.next;
    
    

  
    
    return headPtr.next;
};



let ptr0 = reverseKGroup(new ListNode(1,
    new ListNode(2,
        new ListNode(3,
            new ListNode(4,
                new ListNode(5,
                    null
                )
            )
        )
    )
), 4);

console.log(ptr0);

