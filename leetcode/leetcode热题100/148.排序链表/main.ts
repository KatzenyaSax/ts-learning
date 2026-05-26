class ListNode{
    val: number;
    next : ListNode | null;

    constructor(v: number, n : ListNode | null){
        this.val = !v ? 0 : v;
        this.next = n != undefined ? n : null;
    }
};


/**
 * 
 * 存数组排序然后拼接超时
 * 
 * 学习。。。。
 * 
 * 
 * 
 * 
 */



function sortList(head: ListNode | null): ListNode | null {
    
    /**
     * 
     * while ptr
     *      while finale
     * 
     * 
     */
    
    // 头节点
    let finale = new ListNode(-1, head);

    let ptrHead = head;

    





    return null;
};


let p = sortList(new ListNode(4,
    new ListNode(2,
        new ListNode(1,
            new ListNode(3,
                new ListNode(9,
                    null
                )
            )
        )
    )
));

console.log(sortList(p));