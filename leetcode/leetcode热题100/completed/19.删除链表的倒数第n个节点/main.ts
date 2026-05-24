class ListNode{
    val: number;
    next : ListNode | null;

    constructor(v: number, n : ListNode | null){
        this.val = !v ? 0 : v;
        this.next = n != undefined ? n : null;
    }
};

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    
    let ptr : ListNode|null = head;
    let len : number = 0;
    while(ptr!=null){
        len ++;
        ptr = ptr.next;
    }
    if(len == 1){
        return null;
    }
    if(n == len){
        return head?.next as ListNode|null;
    }
    let cnt : number = 0;
    ptr = head;
    while(ptr!=null){
        if(cnt == len - n -1){
            let temp : ListNode|null = ptr.next;
            ptr.next = temp?.next as ListNode|null;
            break;
        }
        ptr = ptr?.next as ListNode|null;
        cnt ++;
    }
    

    return head;
};

console.log(removeNthFromEnd(
    new ListNode(1, 
        new ListNode(2, 
            new ListNode(3, 
                new ListNode(4, 
                    new ListNode(5, 
                        null)
            )
        )
    )), 3
));