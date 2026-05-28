

class DualListNode{

    key: number;
    val : number;
    pre : DualListNode|null;
    next : DualListNode|null;

    constructor(key: number, val:number, pre : DualListNode|null, next:DualListNode|null){
        this.key = key;
        this.val = val;
        this.pre = pre;
        this.next = next;
    }

}


class LRUCache {

    capacity : number; 
    // map，key为用于搜索的索引，value存值的地址
    map : Map<number, DualListNode|null> = new Map();
    
    //虚拟头节点&尾节点
    head = new DualListNode(0, 0, null, null);
    tail = new DualListNode(0, 0, null, null);

    constructor(capacity: number) {
        this.capacity = capacity;
        this.head.next = this.tail;
        this.tail.pre = this.head;
    }

    show() : void{
        if(this.head.next == this.tail){
            console.log("Cache: []");
        }

        let ptr =  this.head.next;
        let map = new Map<number, number>();
        while(ptr!=this.tail){
            map.set(ptr?.key as number, ptr?.val as number);
            ptr = ptr?.next as DualListNode;
        }
        console.log("Cache: ");
        console.log(map);
    }

    get(key: number): number|null {
        let node;
        if(this.map.has(key) && this.map.get(key)!=null){
            node = this.map.get(key);
            if(node?.pre != this.head){
                (node?.pre as DualListNode).next = node?.next as DualListNode;
                (node?.next as DualListNode).pre = node?.pre as DualListNode;
                node!.pre = this.head;
                this.head.next!.pre = node as DualListNode;
                node!.next = this.head.next;
                this.head.next = node as DualListNode;
            }
            return (this.map.get(key) as DualListNode).val;
        } else{
            return -1;
        }
    }

    put(key: number, value: number): void {
        let node;
        // map中有这个节点
        if(this.map.has(key) && this.map.get(key)!=null){
            node = this.map.get(key);
            (node as DualListNode).val = value;
            //更新map
            this.map.set(key, node as DualListNode); 
            //更新list
            if(node?.pre != this.head){
                (node?.pre as DualListNode).next = node?.next as DualListNode;
                (node?.next as DualListNode).pre = node?.pre as DualListNode;
                node!.pre = this.head;
                this.head.next!.pre = node as DualListNode;
                node!.next = this.head.next;
                this.head.next = node as DualListNode;
            }
        } else{ //没有这个节点
            node = new DualListNode(key, value, this.head, this.head.next);
            (this.head.next as DualListNode).pre = node;
            this.head.next = node;
            this.map.set(key, node);
            if(this.map.size > this.capacity){
                let temp = this.tail.pre;
                this.tail.pre = temp?.pre as DualListNode;
                temp!.pre!.next = this.tail;
                this.map.delete(temp?.key as number);
            }
        }
    }
}



const cache = new LRUCache(2);
cache.put(1,1);
cache.show();

cache.put(2,2);
cache.show();

console.log("cache.get(1): "+cache.get(1));
cache.show();

cache.put(3,3);
cache.show();

console.log("cache.get(2): "+cache.get(2));
cache.show();

cache.put(4,4);
cache.show();

console.log("cache.get(1): "+cache.get(1));
cache.show();

console.log("cache.get(3): "+cache.get(3));
cache.show();

console.log("cache.get(4): "+cache.get(4));
cache.show();