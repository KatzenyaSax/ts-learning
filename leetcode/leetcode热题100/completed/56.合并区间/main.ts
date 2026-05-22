


function sort(nums : number[][]) : number[][]{
    for(let i = 0; i< nums.length; i++){
        for(let j = i+1; j< nums.length; j++){
            if(nums[i][0] > nums[j][0]){  //如果前面数字大，则依次交换
                let temp = nums[j];
                nums[j] = nums[i];
                nums[i] = temp;
            }
        }
    }
    return nums;
}




function merge(intervals: number[][]): number[][] {
    
    let output : number[][] = [];
    intervals = sort(intervals);
    console.log(intervals);

    output.push(intervals[0]);

    for(let i = 1; i < intervals.length; i++){
        /**
         * 重大前提，所有区间已经按照左端点排序，所以新加入的区间，其左端点绝不会在最右已排区间的左端点前面。
         * 因此，新加入的区间与最右已排区间只可能是两种情况：
         *      1.交叉，融合成一个新的大区间
         *      2.无关，新加入区间直接push入merged
        */
        if(output[output.length - 1][1] >= intervals[i][0] ) {
            output[output.length - 1][1] = intervals[i][1] > output[output.length -1][1] ? intervals[i][1]:output[output.length-1][1];
        } else {
            output.push(intervals[i]);
        }
    }

    return output;
};




//console.log(merge([[5,6],[1,4]]));
console.log(merge([[1,3],[2,6],[8,10],[15,18]]));

/**
 * 排序后的区间：[ [ 1, 3 ], [ 2, 6 ], [ 8, 10 ], [ 15, 18 ] ]
 * 
 * 1.   merged => [1,3]
 * 
 * 2.   merged中最右的是[1,3]
 *      [2,6]，显然，是与[1,3]交叉，因为 2<3
 *      那么融合为一个：[1,6]
 *      merged => [1,6]
 * 
 * 3.   merged中最右的是[1,6]
 *      [8,10]不交叉
 *      那么直接加入merged
 *      merged => [1,6] [8,10]
 * 
 * 4.   merged中最右的是[8,10]
 *      [15,18]不交叉
 *      那么直接加入merged
 * 
 * 完成
 * 
 */
