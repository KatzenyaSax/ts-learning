function cmp(a: string[], b: string[]) : boolean{
    a = a.sort();
    b = b.sort();
    for(let i = 0; i < a.length; i++){
        if(a[i] != b[i]){
            return false;
        } else {
            //啥也不干
        }
    }
    return true;
}

function findAnagrams(s: string, p: string): number[] {
    
    if(s.length < p.length) return [];

    // 被验组
    let arrs = s.split("");
    // 窗口组
    let arrp = p.split("").sort;
    // 窗口大小
    let window : number = p.length;
    // 输出
    let output : number[] = [];

    for(let i = 0; i< arrs.length; i++){
        
        let tempArr : string[] = [];
        for(let j = i; j < i + window; j ++){
            tempArr
        }
    }
    




    
    return output;
};



//console.log(findAnagrams("abab", "ab"));
console.log(findAnagrams("cbaebabacd", "abc"));


