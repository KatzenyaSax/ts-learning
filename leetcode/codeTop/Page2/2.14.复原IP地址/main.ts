

//最终结果
let res:string[] = [];
//存储当前构造的ip地址
let tempIp : number[] = new Array(4);

/**
 * 
 * @param s 字符串
 * @param level 层次（0->3为寻找，4为结束判断是否长度合法）
 * @param begin 开始索引
 */
function dfs(s:string, level:number, begin:number):void{

    //已经找到了四个段的ip，若长度刚好用完，说明是一个合法地址
    if(level == 4){ 
        if(s.length==begin){
            res.push(tempIp.join("."));
        }
        return;
    }
    //若还没找到四个段的ip，长度就已经用完了，说明不合法
    if(level!=4 && begin == s.length) return;

    //有先导0时，必须把先导0作为一个单独的段
    if(s[begin]=="0") {
        tempIp[level] = 0;
        dfs(s, level+1, begin+1);
        return;
    }

    //一般状况时
    let addr = 0;
    for(let i=begin; i<s.length; i++){
        addr = addr*10 + Number(s[i]);
        if(addr>0 && addr<=255){
            tempIp[level] = addr;
            dfs(s, level+1, i+1);
        } else{
            break;
        }
    }
}

function restoreIpAddresses(s: string): string[] {
    if(s.length>12 || s.length<4) return [];
    dfs(s, 0, 0);
    let arr = res;
    res = [];
    return arr;
};


console.log(restoreIpAddresses("25525511135"));