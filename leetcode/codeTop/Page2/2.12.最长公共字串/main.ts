function longestCommonSubsequence(text1: string, text2: string): number {
    //dp[i][j] 表示text1前i个字符，与text2前j个字符，最长公共字串的长度

    let s1 , s2;

    if(text1.length>text2.length){
        s1 = text1;
        s2 = text2;
    } else {
        s1 = text2;
        s2 = text1;
    }

    let dp:number[][] = new Array(s1.length+1);
    for(let i=0; i<dp.length; i++){
        dp[i] = new Array(s2.length+1);
        dp[i][0] = 0;
        dp[0][i] = 0;
    }
    console.log(dp);
    for(let i=1; i<=s1.length; i++){
        for(let j=1; j<=s2.length; j++){
            if(s1[i-1]==s2[j-1]) dp[i][j] = dp[i-1][j-1] +1;
            else dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1]);
        }
    }
    return dp[s1.length][s2.length];
};


console.log(longestCommonSubsequence("abc", "df"));