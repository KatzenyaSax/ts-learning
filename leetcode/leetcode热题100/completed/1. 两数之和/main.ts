


function twoSum(nums: number[], target: number): number[] {
  
    let output: number[] = [0, nums.length - 1];
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                output[0] = i;
                output[1] = j;
                break;
            }
        }
    }

    return output;
};



console.log(twoSum([3,2,4], 6));