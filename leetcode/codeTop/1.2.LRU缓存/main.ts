
class DualListNode {

    key : number;
    val : number;

    prev : DualListNode | null;
    next : DualListNode | null;

    constructor(key: number, val: number, prev: DualListNode | null = null, next: DualListNode | null = null){
        this.key = key;
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class LRUCache {

    capacity : number;
    /**
     * head <-> node1 <-> node2 <-> node3 <-> tail
     * 
     * 其中，越接近head，说明越近使用
     * 
     * 
     */
    map : Map<number, DualListNode>;
    head : DualListNode;
    tail : DualListNode;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map<number, DualListNode>();
        this.head = new DualListNode(-1, -1);
        this.tail = new DualListNode(-1, -1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }


    /**
     * 
     * @param node 欲移动到头部的节点
     * 
     * 该方法将节点移动到头部
     * 
     */
    update(node: DualListNode):void{
        //先将node从链表中移除
        node.prev!.next = node.next;
        node.next!.prev = node.prev;

        //开始插入
        /**
         * head <-> node1 <-> ······
         *      node
         *  
         * 需要处理四个指针关系
         */
        let headNext = this.head.next!;
        node.next = headNext;
        node.prev = this.head;
        headNext.prev = node;
        this.head.next = node;
    }

    /**
     * 
     * @param node 
     * 
     * 插入新节点到头结点
     */
    insert(node: DualListNode): void {
        //开始插入
        /**
         * head <-> node1 <-> ······
         *      node
         *  
         * 需要处理四个指针关系
         */
        let headNext = this.head.next!;
        node.next = headNext;
        node.prev = this.head;
        headNext.prev = node;
        this.head.next = node;
    }

    /**
     * 将尾部节点移除
     * 
     * ······ <-> node3 <-> tail
     * 
     * 需要处理三个指针关系
     * 
     */
    popTail(): void {
        let tail = this.tail.prev!;
        tail.prev!.next = this.tail;
        this.tail.prev = tail.prev;
        this.map.delete(tail.key);
    }

    /**
     * 
     * @param key 
     * @returns 若缓存中没有，则返回-1
     */
    get(key: number): number {
        if(this.map.has(key)){
            let node = this.map.get(key)!;
            this.update(node);
            return node.val;
        } else {
            return -1;
        }
    }

    put(key: number, value: number): void {
        //如果已有这个key，该方法则是更新key的val
        if(this.map.has(key)){
            //拿到这个key的节点
            let node = this.map.get(key)!;
            node.val = value;
            this.update(node);
        } else {
            //如果没有这个key，则需要插入这个key
            if(this.map.size === this.capacity){
                //缓存满了，需要删除最不常用节点
                this.popTail();
                //然后插入新节点
                let node = new DualListNode(key, value);
                this.map.set(key, node);
                this.insert(node);
            } else {
                //缓存未满，直接插入新节点
                let node = new DualListNode(key, value);
                this.map.set(key, node);
                this.insert(node);
            }
        }
    }
}





let cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);