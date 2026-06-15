
function quickSort(nums: number[][], left:number, right:number){
    if(left>=right) return;

    /**
     * 1.选定随机基准值
     */
    let randomIndex = left + Math.floor(Math.random()*(right-left+1));
    let pivot = nums[randomIndex][0];
    [nums[randomIndex], nums[left]] = [nums[left], nums[randomIndex]];

    /**
     * 2.三路分区
     * 
     */
    let lt=left, gt=right;
    for(let i=left; i<=gt; ){
        if(nums[i][0]>pivot){
            [nums[i], nums[gt]] = [nums[gt], nums[i]];
            gt--;
        } else if(nums[i][0]<pivot){
            [nums[i], nums[lt]] = [nums[lt], nums[i]];
            lt++;
        } else {
            i++;
        }
    }
    
    /**
     * 3.递归左右
     */
    quickSort(nums, left, lt-1);
    quickSort(nums, gt+1, right);
}

function merge(intervals: number[][]): number[][] {

    //先根据左区间排序
    quickSort(intervals, 0, intervals.length-1);

    console.log(intervals);
    
    let out: number[][] = [];
    out.push(intervals[0]);

    
    for(let i=1; i<intervals.length; i++){

        let o = out[out.length-1], c = intervals[i];

        /**
         * 1.完全覆盖
         * o:[1          4]
         * c:    [2  3]
         * 或者 
         * o:[1           4]
         * c:[1           4]
         */
        if(c[0]>=o[0]&&c[1]<=o[1]) i;//不动
        /**
         * 2.部分覆盖
         * o:[1           4]
         * c:     [2          5]
         */
        else if(c[0]>=o[0] && c[1]>o[1] && c[0]<=o[1]) o[1] = c[1];
        /**
         * 3.完全不覆盖
         * o: [1      3]
         * c:             [4  5]
         */
        else out.push(c);
    }
    return out;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))

console.log(merge([[1,4],[1,4]]));

console.log(merge([[1,4],[2,3]]));

console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10]]));


/*

这里是最优的解法，只用了3ms

function merge(intervals: number[][]): number[][] {
    const ans = [];
    let temp = [];
    intervals.sort((a,b)=>{
        return a[0]-b[0];
    })
    intervals.forEach(interval => {
        if(temp.length){
            // console.log(temp, interval);
            if(interval[0]<=temp[1]){
                temp[1] = interval[1]>temp[1]? interval[1] : temp[1]; 
            }else{
                ans.push(temp);
                temp = interval;
            }
        }else{
            temp = interval;
        }
    })
    ans.push(temp);
    return ans;
};


*/