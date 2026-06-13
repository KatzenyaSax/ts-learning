

/**
 * 
 * 人话：实现O(logn)时间复杂度在数组中find一个值
 * 
 * 数组满足：1 -> m有序，m+1 -> n有序
 * 
 * 且m+1 -> n -> 1 -> m有序
 * 
 * 
 */
function search(nums: number[], target: number): number {

    if(nums.length==0) return -1;
    if(nums.length==1) return nums[0]==target?0:-1;

    let left = 0;
    let right = nums.length-1;
    

    //二分查找
    while(left<=right){
        //mid：使用Math.floor()方法向下取整
        let mid = Math.floor((left+right)/2);
        //边界条件
        if(nums[mid]==target) return mid;

        /**
         * I.
         * left         mid         right
         *  [4,  5,  6,  7,  0,  1,  2]
         * 
         * left<mid => 左侧有序，直接进入逻辑
         * 
         * target = 0 ，不在[left, right]内，因此判断target在右侧，于是left = 3+1 =4 => 0
         * 
         * II.
         *                  left mid  right
         *  [4,  5,  6,  7,  0,  1,  2]
         * 
         * left<mid => 左侧有序，直接进入逻辑
         * 
         * target = 0, 在[left, right]内，right= mid-1 = 5-1 = 4 =>0 
         * 
         * III.
         *                      right
         *                  left mid  
         *  [4,  5,  6,  7,  0,  1,  2] 
         * 
         * right = 4, right = 5, mid = (4+5)/2 = 4
         * 而 target == nums[4] 成立，于是返回 4
         * 
         */

        /**
         * 关键洞见：因为mid已经先做判断了，所以不要再把mid算入左右任意一个序列了，反而降低成功率
         */

        //左侧区间有序
        if(nums[left]<=nums[mid]){
            if(target>=nums[left] && target<nums[mid]){   //target in left
                right = mid-1;
            } else {
                left = mid+1;
            }
        } else {    //左侧区间无序
            if(target>nums[mid] && target<=nums[right]){    // target in right
                left = mid+1;
            } else {
                right = mid-1;
            }
        }
    }
    return -1;
};


console.log(search([4,5,6,7,0,1,2],0))
/**
 * 1.
 * [4,5,6,7,0,1,2]
 * 
 * left = 0; right = 6;
 * mid = 3;=> 7
 * 4 < 7 => 左侧有序
 * target <0 => 4 => 在右侧
 * 
 * 
 * 
 */
