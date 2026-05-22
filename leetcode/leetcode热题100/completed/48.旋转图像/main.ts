/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    //存储左上角的数
    let temp : number;

    let len = matrix.length;

    let mid = len%2 === 0 ? len/2 : (len-1)/2 ;

    console.log(mid);

    let flag : number = 0;

    if(len%2 == 1){
        flag = 1;
    }

    for(let i = 0; i < mid+flag; i ++){  //非中心旋转
    
        for(let j = 0; j < mid; j ++){
            
            temp = matrix[i][j];
            matrix[i][j] = matrix[len-j-1][i];
            matrix[len-j-1][i] = matrix[len-i-1][len-j-1];
            matrix[len-i-1][len-j-1] = matrix[j][len-i-1];
            matrix[j][len-i-1] = temp;
        }
    }

    //console.log(matrix);

};


rotate([[1,2,3],[4,5,6],[7,8,9]]);
rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]);