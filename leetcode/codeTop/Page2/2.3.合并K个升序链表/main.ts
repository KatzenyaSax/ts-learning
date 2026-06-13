import { ListNode, printList } from "../../../lib/lib";





function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    
    let head = new ListNode(0, null);
    let headPtr = head;
    let set = new Set<ListNode|null>();
    lists.forEach(ptr=>{
        //过滤空指针
        if(ptr!=null) set.add(ptr);
    })
    //如果完全没有非空链表，直接返回null
    if(set.size==0) return null;


    while(true){
        let node: ListNode|null = null;
        let min = 10001;
        set.forEach(ptr=>{
            if(ptr!=null){
                if(ptr.val<min){
                    min = ptr.val;
                    node = ptr;
                }
            }
        })
        //node为空，说明arr里一个非空链表都没有了，遍历完成
        if(node==null) return head.next;
        else {
            //拿到了最大值max，和最大值的节点node
            set.delete(node);
            node = (node as ListNode).next;
            set.add(node);
            headPtr.next = new ListNode(min, null);
            headPtr = headPtr.next;
        }
    }
};


let lists = new Array<ListNode|null>()
lists.push(new ListNode(1,
    new ListNode(4,
        new ListNode(5, null)
    )
));
lists.push(new ListNode(1,
    new ListNode(3,
        new ListNode(4, null)
    )
));
lists.push(new ListNode(2,
    new ListNode(6, null)
));
printList(mergeKLists(lists));