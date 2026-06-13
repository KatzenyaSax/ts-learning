

function lengthOfLIS(nums: number[]): number {
    let max = 1;
    //dp[i]为以nums[i]结尾的全体子序列的长度最大值
    //例如[1, 3, 2, 4]，欲求dp[2]，即以nums[2]=2结尾
    //以nums[2]=2结尾的全部子序列：
    //  [1,2]
    //所以dp[2]=2 
    let dp: number[] = new Array<number>(nums.length).fill(1);
    
    /**
     * 动态规划
     * 
     * 
     */
    for(let i=0; i<nums.length; i++){
        for(let j=0; j<i; j++){
            if(nums[j]<nums[i] && dp[j]+1 > dp[i]) dp[i] = dp[j]+1;
        }
        max = Math.max(dp[i], max);
    }
    return max;
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));