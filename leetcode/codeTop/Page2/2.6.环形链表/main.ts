import { ListNode, buildList, printList } from "../../../lib/lib";


function hasCycle(head: ListNode | null): boolean {
    if(head==null || head.next==null) return false;

    let set = new Set<ListNode>();

    while(head?.next!=null){
        //set中有这个节点，直接返回true
        if(set.has(head.next)) return true;
        else set.add(head);
        head = head.next;
    }

    return false;
};


let list = buildList([3,2,0,-4]);
printList(list);
