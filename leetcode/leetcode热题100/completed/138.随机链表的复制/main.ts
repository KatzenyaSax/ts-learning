class _Node{
    val: number;
    next : _Node | null;
    random: _Node | null

    constructor(v: number, n : _Node | null, random : _Node | null){
        this.val = !v ? 0 : v;
        this.next = n != undefined ? n : null;
        this.random = (random===undefined ? null : random)
    }
};



function copyRandomList(head: _Node | null): _Node | null {
    
    let finale : _Node | null;
    let finalePtr ;

    // map：key为旧地址，value为新地址
    let map = new Map<_Node|null, _Node|null>();
    let ptr = head;
    while(ptr!=null){
        //以此创建新节点
        map.set(ptr, new _Node(ptr.val, null, null));
        ptr = ptr.next;
    }

    finale = map.get(head) as _Node;
    finalePtr = finale;

    ptr = head;
    // 为每个新链表节点匹配地址
    while(ptr!=null){
        if(ptr.next!=null){
            finale.next = map.get(ptr.next) as _Node;
        } else {
            finale.next = null;
        }
        if(ptr.random!=null){
            finale.random = map.get(ptr.random) as _Node;
        } else {
            finale.random = null;
        }

        if(ptr.next!=null){
            finale = finale?.next as _Node;
        }

        ptr = ptr.next;
    }



    return finalePtr;
};


let ptr5 = new _Node(1, null, null);
let ptr4 = new _Node(10, ptr5, null);
let ptr3 = new _Node(11, ptr4, null);
let ptr2 = new _Node(13, ptr3, null);
let ptr1 = new _Node(7, ptr2, null);

ptr2.random = ptr1;
ptr3.random = ptr5;
ptr4.random = ptr3;
ptr5.random = ptr1;

let arr = [ptr1, ptr2, ptr3, ptr4, ptr5]

arr.forEach(ptr=>{
    //console.log("val: " + ptr?.val + ", next: "+ptr.next?.val + ", random: "+ptr.random?.val);
})

let ptr = copyRandomList(ptr1);
while(ptr!=null){
    console.log("val: " + ptr.val + ", next: "+ptr.next?.val + ", random: "+ptr.random?.val);
    ptr = ptr.next;
}





