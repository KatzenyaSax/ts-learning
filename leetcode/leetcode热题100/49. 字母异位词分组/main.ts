function sortString(str: string): string {
    return str.split('').sort().join('');
}

function groupAnagrams(strs: string[]): string[][] {
    //使用hashmap
    const map = new Map<string, string[]>();
    const output: string[][] = [];

    for(let i = 0; i < strs.length; i++) {
        if(map.has(sortString(strs[i]))) {
            map.get(sortString(strs[i]))!.push(strs[i]);
        } else{
            map.set(sortString(strs[i]), [strs[i]]);
        }
    }

    //console.log(map);

    for(let [key, value] of map) {
        output.push(value);
    }

    return output;
};



console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));

