
class ListNode{
    val: number;
    next : ListNode | null;

    constructor(v: number, n : ListNode | null){
        this.val = !v ? 0 : v;
        this.next = n != undefined ? n : null;
    }
};



function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    if(list1 == null) return list2;
    if(list2 == null) return list1;

    let list : ListNode;

    //初始化list
    if((list1?.val as number) <= (list2?.val as number)){
        list = new ListNode(list1?.val as number, null);
        list1 = list1.next;
    } else {
        list = new ListNode(list2?.val as number, null);
        list2 = list2.next;
    }


    let ptr = list;
    

    while(list1 != null && list2 != null){
        if((list1?.val as number) <= (list2?.val as number)){   //list1小，list先加入
            ptr.next = new ListNode(list1.val as number, null);
            ptr = ptr.next;
            list1 = list1.next ;
        } else {
            ptr.next = new ListNode(list2.val as number, null);
            ptr = ptr.next;
            list2 = list2.next;
        }
    }

    //此时，必有一方为 null

    let rest : ListNode|null = null;

    if(list1!=null) rest = list1;

    if(list2!=null) rest = list2;

    while(rest!=null){
        ptr.next = new ListNode(rest.val as number, null);
        ptr = ptr.next;
        rest = rest.next;
    }


    return list;

};