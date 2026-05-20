// 完成

function spiralOrder(matrix: number[][]): number[] {
    
    let output : number[] = [];

    let i : number = 0;
    let j : number = 0;
    let cnt : number = 0;

    let left : number = -1;
    let right : number = matrix[0].length;

    let up : number = -1;
    let down : number = matrix.length;

    while(cnt <= matrix.length * matrix[0].length){

        while(j<right){   //向右移动，j未撞右墙
            cnt ++;
            output.push(matrix[i][j] as number);
            j ++;
        }
        if(cnt == matrix.length * matrix[0].length){
            break;
        }
        //j撞右墙了，对应的i行用完了，up下移
        j --;
        i ++;
        up ++;

        while(i<down){    //向下移动，i未撞下墙
            cnt ++;
            output.push(matrix[i][j] as number);
            i++;
        }
        //i撞下墙了，对应的j列用完了，更新j_right
        if(cnt == matrix.length * matrix[0].length){
            break;
        }
        i --;
        j --;
        right --;

        while(j>left){   //向左移动，j未撞左墙
            cnt ++;
            output.push(matrix[i][j] as number);
            j --;
        }
        if(cnt == matrix.length * matrix[0].length){
            break;
        }
        //j撞左墙了，对应的i行用完了，更新i_down
        j ++;
        i --;
        down --;

        while(i>up){    //向下移动，i未撞下墙
            cnt ++;
            output.push(matrix[i][j] as number);
            i--;
        }
        if(cnt == matrix.length * matrix[0].length){
            break;
        }
        //i撞上墙了，对应的j列用完了，更新j_left
        i ++;
        j ++;
        left ++;
        
    }

    return output;
};


console.log("output : "+spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
console.log("output : "+spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));