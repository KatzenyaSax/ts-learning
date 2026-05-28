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
 * 存数组排序然后拼接超时，时间复杂度为 O(n^2)
 * 
 * 归并排序时间复杂度为 O(n*logn)
 * 
 * 学习。。。。
 * 
 * ========== I =========== 
 * sortList(a -> b -> c -> d -> e -> f -> g -> h)
 *                         |    |
 *                        slow mid
 * 
 * ========== II =========== 
 * sortList(a -> b -> c -> d)
 *               |    |
 *             slow  mid
 * 
 * sortList(e -> f -> g -> h)
 *               |    |
 *             slow  mid 
 * 
 * ========== III =========== 
 * sortList(a -> b)
 * 
 * sortList(c -> d)
 *
 * sortList(e -> f)
 * 
 * sortList(g -> h)
 * 
 * ========== IV =========== 
 * 
 * orderMerge(a, b)
 * 
 * orderMerge(c, d)
 * 
 * orderMerge(e, f)
 * 
 * orderMerge(g, h)
 * 
 * ========== V ===========
 * 
 * orderMerge(a->b, c->d)
 * 
 * orderMerge(e->f, g->h)
 * 
 * ========== VI ===========
 * 
 * orderMerge(a->b->c->d, e->f->g->h)
 * 
 * ========== VII ===========
 * 
 * 得到了排序后的链表
 * 
 */

function orderMerge(first: ListNode|null, second: ListNode|null) : ListNode|null{


    let order : ListNode|null = new ListNode(0, null);
    let ptr = order;

    //开始遍历
    while(first!=null && second!=null){
        if(first.val < second.val){
            ptr.next = first;
            first = first.next;
        }else {
            ptr.next = second;
            second = second.next;
        }
        ptr = ptr.next;
    }

    if(!first) ptr.next = second;
    if(!second) ptr.next = first;


    return order.next;
}


function sortList(head: ListNode | null): ListNode | null {
    
    //0个或1个节点
    if(!head || !head.next) return head;
    
    //1、快慢指针寻找中心节点
    let slow : ListNode|null = head;
    let fast : ListNode|null = head.next;
    while(fast!=null && fast.next!=null){
        slow = (slow as ListNode).next;
        fast = fast.next.next;
    }
    let mid = slow?.next; //中心指针
    slow!.next = null;

    //2、递归地对左右两条链表进行排序
    let first = sortList(head);
    let second = sortList(mid as ListNode);

    //3、单次递归结束时，左右两条链表均已排序完成，将左右两条链表有序合并
    return orderMerge(first, second);
};


let p = sortList(new ListNode(4,
    new ListNode(2,
        new ListNode(1,
            new ListNode(3,
                new ListNode(9,
                    new ListNode(5,
                        new ListNode(13,
                            new ListNode(7,
                                null
                            )
                        )
                    )
                )
            )
        )
    )
));

let ptr =sortList(p);
while(ptr!=null){
    console.log(ptr.val);
    ptr = ptr.next;
}