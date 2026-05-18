
// 先sort再排序，失败



function longestConsecutive(nums: number[]): number {

    if(nums.length == 0) {
        return 0;
    }

    let max : number = 1;
    let cnt : number = 1;



    let set = new Set();
    nums.forEach(num => {
        set.add(num);
    });
    

    let it = set.values();

    // 循环
    for(let res = it.next(); !res.done;res = it.next()){
            // 当前 num 为首位
            if(!set.has(res.value as number - 1)){
                console.log(res.value as number);
                let currentNum = res.value as number +1;
                while(true){
                    if(set.has(currentNum)){
                        cnt ++;
                        currentNum += 1;
                    } else{
                        break;
                    }
                }
                //break 之后，
                max = cnt > max ? cnt : max;
                cnt = 1;
            }
            
    }


    return max;
};





console.log(longestConsecutive([0,1,2,4,5,6,7,9,10,11,12]));

