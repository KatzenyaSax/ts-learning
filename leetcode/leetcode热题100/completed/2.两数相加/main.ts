class ListNode{
    val: number;
    next : ListNode | null;

    constructor(v: number, n : ListNode | null){
        this.val = !v ? 0 : v;
        this.next = n != undefined ? n : null;
    }
};


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    if(l1?.val == 0 && l1.next == null) return l2;
    if(l2?.val == 0 && l2.next == null) return l1;
    
    let list : ListNode|null = new ListNode(0, null);
    let add : number = 0;

    if((l1?.val as number) + (l2?.val as number) >= 10){
        add = 1;
        
    } 
    //初始化
    list.val = ((l1?.val as number) + (l2?.val as number)) % 10;
    l1 = l1?.next as ListNode|null;
    l2 = l2?.next as ListNode|null;

    //指针
    let ptr = list;
    console.log("ptr: "+ptr.val);


    while(l1!=null && l2!=null){
        console.log("l1: "+l1?.val);
        console.log("l2: "+l2?.val);

        let temp : number = (l1.val as number) + (l2.val as number) + add;


        if(temp >= 10){
            add =1;
        } else {
            add = 0;
        }
        ptr.next = new ListNode(temp%10, null);
        ptr = ptr.next;

        l1 = l1.next;
        l2 = l2.next;
    }

    let rest : ListNode|null = null;
    if(l1 != null){
        rest = l1;
    } else if(l2 != null){
        rest = l2;
    }

    while(rest!=null){
        let temp : number = rest.val as number + add;
        if(temp >= 10){
            add =1;
        } else {
            add = 0;
        }
        ptr.next = new ListNode(temp%10, null);
        ptr = ptr.next;

        rest = rest.next;
    }

    if(add){
        ptr.next = new ListNode(1, null);
    }


    return list;

};


let l1 : ListNode = new ListNode(2, new ListNode(
    4, new ListNode(
        3, null
    )
));

let l2 : ListNode = new ListNode(5, new ListNode(
    6, new ListNode(
        4, null
    )
));


console.log(addTwoNumbers(l1, l2));

