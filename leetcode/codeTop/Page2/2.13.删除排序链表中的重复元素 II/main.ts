import {ListNode, printList, buildList} from "../../../lib/lib"


function deleteDuplicates(head: ListNode | null): ListNode | null {
    let map = new Map<number, boolean>();
    let ptr = head;
    while(ptr!=null){
        if(map.has(ptr.val)){
            map.delete(ptr.val);
            map.set(ptr.val, true);
        } else map.set(ptr.val, false);
        ptr = ptr.next;
    }
    //console.log(map);
    let newHead:ListNode = new ListNode(0, null);
    ptr = newHead;
    for(let [k,v] of map){
        if(!v){
            ptr.next = new ListNode(k,null);
            ptr = ptr?.next;
        }
    }
    return newHead.next;
};

function deleteDuplicates2(head: ListNode | null): ListNode | null {
    let HEAD = new ListNode(0, head);

    let pre = HEAD;
    let ptr = head;
    while(ptr!=null){
        if(!ptr.next) break;
        //如果ptr和下一个数字不重复
        else if(ptr.val != ptr.next.val){
            pre = ptr;
            ptr = ptr.next;
        } else if(ptr.val==ptr.next.val){ //如果ptr和下一个数字重复
            let val = ptr.val;
            while(ptr && ptr.val==val) ptr = ptr?.next;
            pre.next = ptr;
        }
    }
    return HEAD.next;
}

let list = buildList([1,2,3,3,4,4,5]);
printList(deleteDuplicates2(list));


