function arraysEqual(arr1: number[], arr2: number[]): boolean {
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}


function groupAnagrams(strs: string[]): string[][] {
    let output: string[][] = [];
    output[0] = [strs[0]];
    let index : number[][] = [];

    // 获取每个字符串中每个字母的数量
    for(let i = 0; i < strs.length; i++) {
        index[i] = new Array(26).fill(0); //初始化一个长度为26的数组，表示每个字母的数量
        for(let j = 0; j < strs[i].length; j++) {
            //
            let code = strs[i][j].charCodeAt(0) - 'a'.charCodeAt(0);
            index[i][code] ++; //code处加一
        }
    }

    //匹配
    for(let i = 1; i < strs.length; i++) {
        for(let j = 0; j < output.length; j++) {
            if(arraysEqual(index[i], index[j])) {
                output[j].push(strs[i]);
                break;
            } else {
                output.push([strs[i]]);
                break;
            }

        }

    }
    return output;
};




console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));

