function moveZeroes(nums: number[]): void {
    let zeroCnt = 0; //对0进行计数，指导后续数值的移动
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            zeroCnt++;
        } else if(zeroCnt > 0) { //如果当前数值不为0，并且之前有0的计数，则进行移动
            nums[i - zeroCnt] = nums[i]; //将当前数值移动到前面
            nums[i] = 0; //将当前位置设置为0
        }
    }
};



let array = [0,1,0,3,12];
moveZeroes(array);
console.log(array);