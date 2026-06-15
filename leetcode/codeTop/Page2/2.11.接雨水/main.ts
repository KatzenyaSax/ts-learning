function trap(height: number[]): number {
    //雨水量
    let water = 0;
    //求最高峰
    let peak = height[0];
    height.forEach(h => {
        peak = Math.max(peak, h);
        //把柱子占的空格减去
        water -= h;
    });

    //所有空隙填满水
    water += peak*height.length;

    for(let h=1; h<=peak; h++){
        let emptyOfLeft = 0, emptyOfRight = 0;
        //计算左边的空隙
        for(let i = 0; i<height.length; i++){   
            if(height[i] < h) emptyOfLeft ++;
            else break;
        }
        //计算右边的空隙
        for(let i = height.length-1; i>=0;i--){
            if(height[i]<h) emptyOfRight++;
            else break;
        }
        //减去左右两边的空隙
        water -= emptyOfLeft;
        water -= emptyOfRight;
    }
    return water;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));

console.log(trap([4,2,0,3,2,5]));