import { ListNode, printList } from "../../../lib/lib";

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {

    if(head==null || head.next==null || left==right) return head;

    let hair = new ListNode(0, head);

    let pre : ListNode|null = null;
    let tail: ListNode|null;
    let ptr : ListNode|null = hair;

    for(let i=0; i<=right; i++){
        // 遍历不在范围内，自增，不动
        if(i<left-1){
            ptr = ptr!.next;
            continue;
        } 
        //找到 left 前一个节点了，设置 pre 和 tail
        else if(i==left-1){
            pre=ptr;  //找到前置节点
            //console.log("got pre: "+pre?.val);
            ptr = ptr!.next;
            tail = ptr;
        } 
        //在left到right范围内，每次将当前节点头插到pre后面
        else {
            //获取当前节点
            let temp = ptr;
            //ptr直接自增，防止干扰
            ptr = ptr!.next;

            //老三样
            tail!.next=ptr;
            temp!.next = pre!.next;
            pre!.next = temp;
        }
    }
    return hair.next;
};



let list:ListNode|null = new ListNode(1,
    new ListNode(2,
        new ListNode(3,
            new ListNode(4,
                new ListNode(5,
                    null
                )
            )
        )
    )
)
printList(reverseBetween(list, 2, 4));