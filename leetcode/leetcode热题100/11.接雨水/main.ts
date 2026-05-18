

function maxArea(heigt: number[]):number{

    let max = 0;


    let i : number = 0;
    let j : number = heigt.length-1;

    while(i != j){


        while(heigt[i+1] < heigt[i]){
            i ++;
        }
        while(heigt[j-1]<heigt[j]){
            j --;
        }
    }


    return 0;
}