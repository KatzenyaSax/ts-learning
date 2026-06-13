import { ListNode,printList } from "../../../lib/lib";

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if(list1==null) return list2;
    if(list2==null) return list1;

    let newHead = new ListNode(0, null);
    let ptr1 = list1, ptr2 = list2;
    let ptrHead = newHead;
    while(ptr1&&ptr2){
        let temp;
        if(ptr1.val<ptr2.val) {
            temp = ptr1;
            ptr1=ptr1?.next as ListNode;
        } else {
            temp = ptr2;
            ptr2 = ptr2.next as ListNode;
        }
        ptrHead.next = temp;
        ptrHead = ptrHead.next;
    }

    if(ptr1==null) ptrHead.next = ptr2;
    if(ptr2==null) ptrHead.next = ptr1;

    return newHead.next;
}


let list1:ListNode = new ListNode(1,
    new ListNode(3,
        new ListNode(5,
            null
        )
    )
)

let list2:ListNode = new ListNode(2,
    new ListNode(4,
        new ListNode(6,
            new ListNode(7, 
                null
            )
        )
    )
)

printList(mergeTwoLists(list1,list2));

