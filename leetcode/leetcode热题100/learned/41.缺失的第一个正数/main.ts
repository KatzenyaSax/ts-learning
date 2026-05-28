function firstMissingPositive(nums: number[]): number {

    /**
     * 原地hash表：数组可以看成一个hash表，k为index，v为数组值
     * 
     * 题目要求找的是“正数”，所以刚好可以用“负数”来表示该index对应的正数出现过
     * 
     * 这样的话，数组中原本是负数的位置也可以用来存储了，因为负数本来就没有意义
     * 
     * 1.先处理数组中的负数和0，将其替换为1，但是在此之前可以遍历数组查找是否有1，如果有的话就可以放心大胆地使用1；如果没有的话更好，结果直接就出来了，就是1。
     * 
     * 为什么要排除负数和0？因为我们需要用nums[i]的正负来表达 i+1 这个正数在数组中是否存在
     * 
     * 2.现在，数组中全都是正数了。首先明确一点，我们规定，如果正数i在数组中，那么nums[i-1]应该为负数
     * 
     *
     * 
     */

    let flag = false;   //没有1
    for(let i = 0; i < nums.length; i ++){
        if(nums[i] == 1){
            flag = true;
            break;
        } 
    }
    //console.log(flag)
    if(!flag){
        //console.log("doesnt have 1");
        return 1;
    }

    for(let i = 0; i < nums.length; i ++){
        if(nums[i]<=0 || nums[i] > nums.length) nums[i] = 1;
    }

    console.log(nums);

    for(let i = 0; i < nums.length; i ++){
        
        let temp = nums[i]>0?nums[i] : -nums[i];
        
        nums[temp-1] = nums[temp-1]<0?nums[temp-1]:-nums[temp-1]

        
    }

    console.log(nums);

    for(let i = 0; i < nums.length; i ++){
        if(nums[i] > 0){
            return i + 1;
        }
    }

    return nums.length+1;

};


console.log(firstMissingPositive([1,2,3,10,2147483647,9]));