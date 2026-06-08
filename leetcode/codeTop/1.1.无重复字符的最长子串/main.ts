function lengthOfLongestSubstring(s: string): number {
    
    if(!s.length) return 0;

    //存储已经加入字符串的字符和它所在的位置
    let map = new Map<string, number>();

    //window即滑动窗口的长度，也即当前最长子串的长度
    let window = 1;

    //最大长度
    let max = window;

    //初始化
    map.set(s[0], 0);

    //便利字符串，更新window的长度
    for(let i=1; i<s.length; i++){
        if(map.has(s[i])){
            //如果字串已经存在当前字母，结束本次字串遍历，从上一个重复字母的下一个索引处继续
            i = map.get(s[i])!;
            window = 0;
            map.clear();
        } else {
            //如果字串不存在当前字母，window长度加1
             window++;
             map.set(s[i], i);
             max = Math.max(max, window);
        }
        
    }
    return max;
}






