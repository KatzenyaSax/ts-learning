
function searchMatrix(matrix: number[][], target: number): boolean {

    let i : number = 0;
    let j : number = matrix[0].length - 1;


    while(i >= 0 && i < matrix.length && j >= 0 && j < matrix[0].length){
        // 从矩阵中心开始查找
        /**
         * 
         * 过于抠字眼了，从中心查找固然可以最大化时间效率
         * 然而这样一来就必须考虑到增与减的多种情况
         * 
         * 相比起从matrix[0][matrix[0].length - 1]开始对搜索树进行搜索
         * 也不过只是将O(n) 优化到了 O(n/2)，本质还是 O(n)
         * 
         * 而从matrix[0][matrix[0].length]看成搜索树的根节点，将矩阵斜向放置，自然有：左边（j--）永远比自己小；右边（i++）永远比自己大
         * 
         * 这样就可以很方便地搜索了
         * 
         */

        if(matrix[i][j] < target){
            i ++;
        } else if (matrix[i][j] > target){
            j --;
        } else {
            return true;
        }


    }


    return false;
};


console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5));

console.log(searchMatrix([[-1,3]], -1));

console.log(searchMatrix([[1,4],[2,5]], 3));