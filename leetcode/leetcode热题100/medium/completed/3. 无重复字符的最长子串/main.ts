// 完成

function lengthOfLongestSubstring(s: string): number {

    if(s.length === 0) return 0;

    let windows = 1;    //滑动窗口尺寸
    let index = 0;

    let str = s.split('');

    //用hashmap的has方法轻松判断是否重复
    //map： 字符-位置
    let map = new Map<string, number>();

    while(index < str.length) {

        // 判断滑动窗口内
        for(let i = index; i < index + windows && i < str.length; i++) {
            console.log(map);
            console.log("windows: " + windows + " index: " + index );
            if(!map.has(str[i]) && str[i] ) { //如果没有重复，更新map
                map.set(str[i], index);
                windows = windows > map.size ? windows : map.size; //更新窗口尺寸
            } else {
                //如果有重复，index回到重复位置的下一位，以新的滑动窗口进行
                index = map.get(str[i])! + 1;
                map.clear();
                map.set(str[index], index); //更新重复字符的位置
                break;
            }
        }
        index ++;
    }
    return windows;
};

console.log(lengthOfLongestSubstring("dvdf"));