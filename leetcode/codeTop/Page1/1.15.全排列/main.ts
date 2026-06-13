
/**
 * 
 * @param res 整体结果
 * @param arr 给定数组
 * @param temp 临时结果
 * 
 * 
 * 依次遍历nums的元素，进入dfs方法，将元素放到temp，然后做一个逻辑判断：nums中的元素不在temp内才参与接下来的操作
 * 
 * 案例：nums=[1, 2, 3]
 * dfs:
 *  nums = [1, 2, 3]
 *  temp = []
 * 
 *  nums.length!=temp.length => 继续 
 * 
 *  for : i = 0
 *      nums[0] 不在 temp内(isNumInTemp=false)
 *      \_> temp=[1]
 *          dfs:
 *              nums=[1,2,3]
 *              temp=[1]
 *              
 *              nums与temp不等长 => 继续
 * 
 *              for : i=0
 *                  nums[0] 在temp内(isNumInTemp=true)
 *                  \_> temp不动
 * 
 *              for : i=1
 *               |   nums[1] 不在 temp内(isNumInTemp=false)
 *               |   \_> temp = [1, 2]
 *               |    |   dfs:
 *               |    |       nums = [1,2,3]
 *               |    |       temp = [1,2]
 *               |    |       
 *               |    |       nums与temp不等长 => 继续
 *               |    |
 *               |    |       for : i=0
 *               |    |       nums[0] 在temp内(isNumInTemp=true)
 *               |    |       \_> 不动
 *               |    |
 *               |    |       for : i=1
 *               |    |       nums[1] 在temp内(isNumInTemp=true)
 *               |    |       \_> 不动
 *               |    |
 *               |    |       for : i=2
 *               |    |       nums[2] 不在temp内(isNumInTemp=false)
 *               |    |       \_> temp = [1,2,3]
 *               |    |        |  dfs:
 *               |    |        |       num=[1,2,3]
 *               |    |        |       temp=[1,2,3]
 *               |    |        |
 *               |    |        |       nums与temp等长 => res.push([1,2,3])
 *               |    |        |       return 
 *               |    |        |
 *               |    |       temp.pop => temp=[1,2]
 *               |   temp.pop => temp=[1]
 *               |           
 *              for : i = 2
 *                  nums[2] 不在temp内(isNumInTemp=false)
 *                  \_> temp = [1,3]
 *                   |   dfs:
 *                   |       temp=[1,3]
 *                   |
 *                   |       for: i=0 nums[0]在temp内 => 不动
 *                   |
 *                   |       for: i=1 nums[1]不在temp内 => temp = [1,3,2]
 *                   |       \_> dfs:    nums与temp等长 => res.push([1,3,2]) => return
 *                   |           |
 *                   |           temp.pop => temo = [1,3]
 *                   |
 *                   |       for: i=2 nums[2]在temp内 => 不动
 *                   |
 *                  temp.pop => temp=[1]
 * 
 * 
 *      ........
 * 
 * 
 */
function dfs(res:number[][], nums:number[], temp:number[]):void{
    if(temp.length==nums.length){
        res.push([...temp]);
        return;
    }
    for(let i=0; i<nums.length; i++){
        let isNumInTemp = false;
        for(let j=0; j<temp.length; j++){
            if(nums[i]==temp[j]){
                isNumInTemp = true;
                break;
            }
        }
        if(!isNumInTemp){
            temp.push(nums[i]);
            dfs(res, nums, temp);
            temp.pop();
        } 
    }
}



function permute(nums: number[]): number[][] {
    //最终返回的结果数组
    let res : number[][] = [];
    //临时存放用过元素的数组
    let temp : number[] = [];
    dfs(res, nums, temp);
    return res;
};


permute([1,2,3]).forEach(arr=>{
    console.log(arr);
})