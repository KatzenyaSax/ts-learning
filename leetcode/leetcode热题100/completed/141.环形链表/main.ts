
class ListNode{
    val: number;
    next : ListNode | null;

    constructor(v: number, n : ListNode | null){
        this.val = !v ? 0 : v;
        this.next = n != undefined ? n : null;
    }
};


function hasCycle(head: ListNode | null): boolean {
    
    let set = new Set<ListNode| null>;

    while(head != null){
        set.add(head);
        if(set.has(head.next)){
            return true;
        }
        head = head.next;
    };

    return false;
};