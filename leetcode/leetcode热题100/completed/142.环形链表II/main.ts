class ListNode{
    val: number;
    next : ListNode | null;

    constructor(v: number, n : ListNode | null){
        this.val = !v ? 0 : v;
        this.next = n != undefined ? n : null;
    }
};

function detectCycle(head: ListNode | null): ListNode | null {

    let set = new Set<ListNode| null>;

    let ptr = head;

    while(ptr != null){
        set.add(ptr);
        if(set.has(ptr.next)){
            return ptr.next;
        }
        ptr = ptr.next;
    };

    return null;
};