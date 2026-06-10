class ListNode{
    val: number;
    next : ListNode | null;

    constructor(v: number, n : ListNode | null){
        this.val = !v ? 0 : v;
        this.next = n != undefined ? n : null;
    }
};

function printList(head :ListNode|null){
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



//尝试使用不申请额外空间O(n)的做法
function reverseList(head: ListNode | null): ListNode | null {

    if(!head) return null;
    if(head.next == null) return head;

    let Hair = new ListNode(0, head);
    head = head.next;
    (Hair as ListNode).next!.next = null;
    while(head!=null){
        let temp = head;
        head = head.next;
        temp.next = Hair.next;
        Hair.next = temp;
    }
    
    return Hair.next;
}

printList(reverseList(new ListNode(2,
    new ListNode(4,
        new ListNode(6,
            new ListNode(7, 
                null
            )
        )
    )
)))