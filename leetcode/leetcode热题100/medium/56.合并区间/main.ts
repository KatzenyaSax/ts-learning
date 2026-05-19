function merge(intervals: number[][]): number[][] {
    
    let output : number[][] = [];
    let set = new Set<number>();



    intervals.forEach(ite =>{
        let start = ite[0];
        let end = ite[1];
        for(let i = start; i <= end; i++){
            set.add(i); //set去重       
        }
    })

    console.log(set);

    let last : number ;
    let start : number;
    let end : number;

    let it = set.values();
    for(let res = it.next();;){
        start = res.value as number;
        break;
    }

    

    set.forEach(num=>{
        if(num > last+1){  //右端点
            end = last;
            output.push([start, end]);
            start = num;
            last = num;
        } else{
            last = num;
        }
    });


    return output;
};





console.log(merge([[1,3],[2,6],[8,10],[15,18]]));

/**
 * 1,3
 * 2>1 & 2<3：删掉左边；6>3：更新右边 
 * 
 * 
 */