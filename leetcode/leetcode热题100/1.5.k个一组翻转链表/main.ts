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
}


/**翻转链表
 * 
 * 之前的翻转链表是用数组存节点，然后反向尾插入做的
 * 
 * 空间复杂度就变成O(n)了
 * */

function reverseList(head:ListNode, tail:ListNode|null, k:number){

    let ptr = head.next;
    head.next = tail;
    //依次头插
    for(let i=0; i<k; i++){
        let temp = ptr;
        ptr = ptr!.next;
        temp!.next = head!.next;
        head.next = temp as ListNode;
    }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {

    //极端条件，k=1就是不反转；head.next=null就是只有一个元素，也不翻转
    if(k==1 || head?.next == null || head==null) return head;

    let pre = new ListNode(0, head);
    let ptr:ListNode|null = head;
    let preNode = pre;  //被翻转链表的前锚点
    let tailNode;   //被翻转链表的后锚点
    let nextPre;    //下一轮中的前锚点（就是这一轮被翻转链表的第一个节点）
    let cnt;    //计算链表是否够k，不然则不翻转
    
    while(ptr){
        cnt = 0;//计数器
        nextPre = preNode?.next;    //存储下一次循环preNode的值（因为本轮中被翻转了，所以preNode的下一个节点就是下一循环的preNode）
        while(cnt<k-1){
            ptr = ptr?.next as ListNode|null;
            if(ptr!=null) cnt ++;   //下一个节点
            else break;
        }
        ptr = ptr?.next as ListNode|null; //ptr自增，进入下一轮被翻转链表的第一个节点，防止被该轮翻转扰乱
        tailNode = ptr;  //后锚点

        //数量不够，直接返回；够就翻转
        if(cnt < k-1) return pre.next;
        else reverseList(preNode, tailNode, k);
        
        preNode = nextPre as ListNode;  //更新前锚点
    }

    return pre.next;
}

let ptr0 = reverseKGroup(new ListNode(1,
    new ListNode(2,
        new ListNode(3,
            new ListNode(4,
                new ListNode(5,
                    new ListNode(6,
                        new ListNode(7,
                            new ListNode(8,
                                null
                            )
                        )
                    )
                )
            )
        )
    )
), 3);
printList(ptr0);

