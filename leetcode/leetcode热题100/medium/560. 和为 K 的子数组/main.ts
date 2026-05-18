





function subarraySum(nums: number[], k: number): number {
    
    let cnt : number = 0;

    // k：数字；v：数字的数量
    let map = new Map<number, number>();
    for(let i = 0; i < nums.length; i ++){
        if(!map.has(nums[i])){ //map中不存在数字，添加
            map.set(nums[i], 1);
        } else{ //map中存在，则数量加一
            let originNum : number = map.get(nums[i]) as number;
            map.set(nums[i], originNum + 1);    
        }
    }

    let prefix = new Map<number, number>();



    console.log(map);







    return cnt;

};




console.log(subarraySum([1,1,2,2,3,3,4,4,5,5], 5));


/**
 * 前缀和推算
 * 
 * key = 1 时，5-1 = 4，显然存在map，cnt += 
 * 
 */

