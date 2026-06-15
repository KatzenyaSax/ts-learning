function spiralOrder(matrix: number[][]): number[] {


    //上下左右墙
    let up = 0, down = matrix[0].length-1, left = 0, right = matrix.length-1;

    //结果
    let out : number[] = [];

    let x=0, y=0;

    while(up<down||left<right){
        while(x++<=right) out.push(matrix[x][y]);
        x--;
        up++;
        while(y++<=down) out.push(matrix[x][y]);
        y--;
        down--;
        while(x-->=left) out.push(matrix[x][y]);
        x++;
        left++;
        while(y-->=up) out.push(matrix[x][y]);
        y++;
        up++;
    }

    return out;
};



console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));