function QuickSort(nums:number[], left:number, right:number){
    if(left>=right) return;

    /**
     * 1.选择pivot，随机
     */
    let randomIndex = left + Math.floor(Math.random() * (right - left + 1));
    let pivot = nums[randomIndex];
    [nums[left],nums[randomIndex]] = [nums[randomIndex],nums[left]];
    let lt = left, gt = right, i = left;
    /**
     * 2.开始三路分区排序
     */
    while(i<=gt){
        if(nums[i] > pivot){
            [nums[i], nums[gt]] = [nums[gt], nums[i]];
            gt--;
        } else if(nums[i]<pivot){
            [nums[i], nums[lt]] = [nums[lt], nums[i]];
            lt ++;
        } else i ++;
    }
    /**
     * 3.递归
     */
    QuickSort(nums, left, lt-1);
    QuickSort(nums,gt+1,right);
}

function sortArray(nums: number[]): number[] {
    QuickSort(nums, 0, nums.length-1);
    return nums;
};  



console.log(sortArray([5,1,1,2,0,0]))