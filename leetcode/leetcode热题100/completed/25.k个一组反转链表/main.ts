
class ListNode{
    val: number;
    next : ListNode | null;

    constructor(v: number, n : ListNode | null){
        this.val = !v ? 0 : v;
        this.next = n != undefined ? n : null;
    }
};


function printList(head: ListNode) : void{
    if(head == null){
        console.log("null");
        return;
    }
    while(head!=null){
        console.log(head.val);
        if(head.next == null){
            return ;
        } else{
            head = head.next;
        }
    }
}


function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    
    /**
     *   
     * 
     *  1 -> 2 -> 3 -> 4 -> 5
     *  ^
     *  |
     * headPtr -> 1(headPtr.next)
     * 
     *  
     * 
     * 
     * 
     * 
     * 
     */

    if(k == 1){
        return head;
    }

    let headPtr = new ListNode(0, head);
    let ptr = head;
    let last = headPtr;
    

    
    while(true){

        //存储节点
        let arr : ListNode[] = [];
        //k个节点子链表
        let newK : ListNode = new ListNode(-1, null);
        //k的头节点
        let newKPtr = newK;
        
        //k个节点按顺序写入arr
        for(let i=0; i< k; i++){
            arr.push(ptr as ListNode);
            if(ptr == null){
                return headPtr.next;
            } else {
                ptr = ptr!.next;
            }
        }

        if(arr.length < k){
            break;
        }

        //倒读arr，创建反向k链表
        for(let i = k-1; i>=1; i --){
            newK.val = arr[i].val;
            newK.next = arr[i-1];
            newK = newK.next;
        }
        //k的后方链接ptr
        newK.next = ptr;
        //k的前方链接last
        last.next = newKPtr;
        //更新last：newK的最后一个元素
        last = arr[0];

        /*
        console.log("newKPtr");
        printList(newKPtr)
        console.log("ptr");
        printList(ptr);
        console.log("last");
        printList(last);

        console.log("headPtr.next");
        printList(headPtr.next as ListNode);

        console.log("==============")
        */

    }
    
    return headPtr.next;
};





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


console.log("finale:");
printList(ptr0 as ListNode);


//console.log(ptr0);
