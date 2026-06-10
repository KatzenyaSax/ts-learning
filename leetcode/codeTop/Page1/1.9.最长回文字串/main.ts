
/**
 * 
 * @param s 
 * @returns 
 * 
 * 方法一，双指针遍历，左右向中间逼近判断回文
 * 
 * 时间复杂度 O(n^3)
 * 
 */
function longestPalindromeOn3(s: string): string {
    
    
    let strs : string[] = s.split("");
    if(strs.length==1 || strs.length==0) return s;
    //console.log(strs);
    //最大程度
    let max = 1;
    //其中之一的最长字串
    let out : string = strs[0];

    for(let i=0; i<strs.length-1; i++){
        for(let j = strs.length-1; j>0; j--){
            console.log("i: "+strs[i]+" j: "+strs[j]);
            let l=i, r=j;
            let flag =true;
            if(strs[l]!=strs[r]) {
                continue;
            }
            while(l<r){
                console.log("compare: " +strs[l]+" & "+strs[r]);
                if(strs[l]!=strs[r]){   
                    flag = false;
                    break;
                } else{
                    l++;
                    r--;
                }
            }
            if(flag&&j-i+1>max){
                max = j-i+1;
                let table : string[] = [];
                for(let k = i; k<=j; k++) table.push(strs[k]);
                out = table.join("");
                console.log("out: "+out);
            }
        }
    }

    return out;
};


/**
 * 
 * @param s 
 * @returns 
 * 
 * 方法二，从中心向两边扩散判断回文
 *      a b b c c c b a 
 *            |
 *      b <- cneter -> c
 * 
 */
function longestPalindrome(s: string): string {

    let arr = s.split("");

    let max = 0;
    let begin = 0;

    for(let i=0; i<s.length; i++){
        //console.log("遍历到："+arr[i]);
        //console.log("奇数");
        //判断奇数串
        let left = i, right = i;
        while(left>=0 && right<s.length && arr[left]==arr[right]){  //当且仅当left和right一样时才继续循环
            //console.log("left: "+arr[left]+" & right: "+arr[right]);
            if(right-left+1 > max){
                max = right-left+1;
                begin = left;
                //console.log("更新：max="+max+", begin="+begin);
            }
            left--;
            right++;
        }

        //判断偶数串
        //console.log("偶数");
        left = i, right = i+1;
        while(left>=0 && right<arr.length && arr[left]==arr[right]) {
            //console.log("left: "+arr[left]+" & right: "+arr[right]);
            if(right-left+1 > max){
                max = right-left+1;
                begin = left;
                //console.log("更新：max="+max+", begin="+begin);
            }
            left--;
            right++;
        }
    }

    let out = [];
    for(let i=0; i<max; i++) out.push(arr[begin+i]);

    return out.join("");
}


//console.log(longestPalindrome("babad"));

//console.log(longestPalindrome("cbbd"));

console.log(longestPalindrome("abbcccba"));

