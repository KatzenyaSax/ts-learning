/**
 * 
 * 在便利 m[0]时，就直接进行处理
 * 
 * 
 */



function setZeroes(matrix: number[][]): void {
    
    let row = new Set<number>();
    let line = new Set<number>();

    for(let i = 0; i < matrix.length; i ++){
        for(let j = 0; j < matrix[0].length; j ++){
            if(!matrix[i][j]) {
                line.add(i);
                row.add(j);
            }
        }
    }

    for(let i = 0; i < matrix.length; i ++){
        for(let j = 0; j < matrix[0].length; j ++){
            if(line.has(i) || row.has(j)){
                matrix[i][j] = 0;
            }
        }
    }

    console.log(matrix);


};


setZeroes([[1,2,3,4],[5,0,7,8],[0,10,11,12],[13,14,15,0]]);