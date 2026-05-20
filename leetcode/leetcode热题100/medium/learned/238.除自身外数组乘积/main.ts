/**
 * 
 * 关键洞见：前缀积可以从前往后，亦可从后往前
 * 
 * 对于 nums[i]，i处对应的积就是左边所有的前缀积和右边所有的前缀积之积
 * 
 * 
 * 
 */



function productExceptSelf(nums: number[]): number[] {
  
    let output : number[] = new Array(nums.length).fill(1);

    let left : number[] = new Array(nums.length).fill(1);
    left[1] = left[0] 
    let right : number [] = new Array(nums.length).fill(1);
    right[nums.length-2] = nums[nums.length -1];

    for(let i = 1; i < nums.length; i ++){
        left[i] = left[i-1] * nums[i-1];
        right[nums.length-1-i] = right[nums.length -i] * nums[nums.length - i];
    }


    for(let i = 0; i < nums.length; i++){
        output[i] = left[i] * right[i];
        if(output[i] === -0) output[i] = 0;
    }


    return output;
};


console.log(productExceptSelf([-1,1,0,-3,3]));