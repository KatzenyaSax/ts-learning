class ListNode{
    val: number;
    next : ListNode | null;

    constructor(v: number, n : ListNode | null){
        this.val = !v ? 0 : v;
        this.next = n != undefined ? n : null;
    }
};


function swapPairs(head: ListNode | null): ListNode | null {
    
    let ptr : ListNode|null = null;

    // head没有next，边界条件直接返回
    if(head?.next == null){
        return head;
    }

    //先初始化，让head的前两个先交换
    let one : ListNode|null = head;
    let two : ListNode|null = one.next;
    let three : ListNode|null = (two as ListNode).next;
    //交换
    (one as ListNode).next = three;
    (two as ListNode).next = one;
    head = two;

    // 最终输出
    ptr = head;

    
    // 使用last存储上一个节点
    let last = (head as ListNode).next;
    // head增2
    head = (head as ListNode).next?.next as ListNode;
    
    // 循环
    while (head!=null){
        if(head.next == null){
            break;
        }

        let one : ListNode|null = head;
        let two : ListNode|null = one.next;
        let three : ListNode|null = (two as ListNode).next;
        //交换
        (one as ListNode).next = three;
        (two as ListNode).next = one;
        head = two;

        (last as ListNode).next = head;
        last = (head as ListNode).next;
        head = (head as ListNode).next?.next as ListNode;
    }
    return ptr;
};





let ptr = swapPairs(
    new ListNode(1,
        new ListNode(2,
            new ListNode(3,
                new ListNode(4,
                    new ListNode(5,null)
                )
            )
        )
    )
);


while(ptr!=null){
    console.log(ptr.val);
    ptr = ptr.next;
}






