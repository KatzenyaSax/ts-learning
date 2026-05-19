
/**
 * 思路：动态规划
 * 
 * 
 * 
 */




function maxSubArray(nums: number[]): number {
    
    // 让dp存储到 i 为止的最大元素
    let dp : number[] = new Array(nums.length).fill(0);
    dp[0] = nums[0];

    for(let i = 1; i < nums.length; i++){
        // dp[i] 怎么选择：当dp[i-1]加上 nums[i]后，比dp[i]大，那么就更新；反之，则舍弃前面的dp[i-1]
        dp[i] = dp[i-1]+nums[i] > nums[i] ? dp[i-1]+nums[i] : nums[i];

    }
    
    let max : number = dp[0];
    dp.forEach(num=>{
        max = max > num ? max : num;
    })

    return max;
    
};



console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([5,4,-1,7,8]));

