import {ListNode, printList} from "../../../lib/lib"

/**
 * 
 * @param head 
 * 
 * 
 * 
 *  1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
 * 偶数节点数时，边界条件：
 * 
 * 
 */
function reorderList(head: ListNode | null): void {
    let stack : ListNode[] = [];
    let ptr = head;
    //将节点全部压入栈，且将节点全部断开
    while(ptr!=null){
        let temp = ptr;
        ptr = ptr.next;
        temp.next = null;
        stack.push(temp);
    }  
    let len = stack.length;

    let hair : ListNode = new ListNode(0, null);
    let headPtr = hair;

    //左右指针
    let left=0, right=len-1;
    while(left<right){
        //左右分别依次尾插
        let node1 = stack[left++], node2 = stack[right--];
        headPtr.next = node1;
        headPtr = headPtr.next;
        headPtr.next = node2;
        headPtr = headPtr.next;
    }
    if(left == right){
        headPtr.next = stack[left];
    }
    head = hair.next;
};



let list = new ListNode(1,
    new ListNode(2,
        new ListNode(3,
            new ListNode(4,
                new ListNode(5,
                    new ListNode(6,
                        null
                    )
                )
            )
        )
    )
)
reorderList(list);

printList(list);

