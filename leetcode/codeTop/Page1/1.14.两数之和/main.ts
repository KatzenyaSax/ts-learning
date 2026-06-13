function twoSum(nums: number[], target: number): number[] {
    let map = new Map<number, number>();
    let out : number[] = [];
    for(let i=0; i<nums.length; i++){
        if(map.has(target-nums[i])) {
            out.push(i);
            out.push(map.get(target-nums[i]) as number);
            return out;
        } else {
            map.set(nums[i], i);
        }
    }
    return out;
}

console.log(twoSum([2,7,11,15], 9));