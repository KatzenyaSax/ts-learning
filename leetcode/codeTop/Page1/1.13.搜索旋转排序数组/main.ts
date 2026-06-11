

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

        let mid = (right+left+1)%2==1?(right+left)/2:(right+left-1)/2;

        console.log("left: "+left+" ,mid: "+mid+" , right: "+right);

        //左侧区间有序
        if(nums[left]<=nums[right]){
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
