import { ListNode,printList } from "../../../lib/lib";



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