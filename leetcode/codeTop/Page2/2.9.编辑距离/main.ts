
function getMin(nums: number[]):number{
    let min = nums[0];
    nums.forEach(num=>{
        min = Math.min(min, num);
    })
    return min;
}

function minDistance(word1: string, word2: string): number {

    //转为字符串数组
    let s1=word1.split(""), s2=word2.split("");

    //dp[i][j] 表示s1的前i个字符转化为s2的前j个字符最少需要多少步
    let dp : number[][] = [];
    for(let i=0; i<=s1.length;i++) 
        dp.push(new Array<number>(s2.length+1));

    //初始化dp
    for(let i=0; i<=s1.length; i++) dp[i][0] = i;
    for(let j=1; j<=s2.length; j++) dp[0][j] = j;

    //遍历i和j，求取全部可能性
    for(let i=0; i<s1.length; i++){
        for(let j=0; j<s2.length; j++){
            //如果s1的字串和s2的字串末尾字符相同，则此时dp的数值等同于去掉这个字符，也即上一轮i与j的s1和s2的字串对应的dp
            if(s1[i]==s2[j]) dp[i+1][j+1] = dp[i][j];

            //如果不同，则引申出三种解法（删、插、改），我们只取其中最小的一个
            else dp[i+1][j+1] = 1 + getMin([dp[i][j+1], dp[i+1][j], dp[i][j]]);
        }
    }

    console.log(dp);

    return dp[s1.length][s2.length];
};



console.log(minDistance("horse", "ros"));