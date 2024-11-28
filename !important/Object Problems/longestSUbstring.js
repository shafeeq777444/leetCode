var longestSubString=function(s){
    const charSet=new Set()
    let start=0
    let maxLength=0
    for(end=0;end<s.length;end++){
        while(charSet.has(s[end])){
            charSet.delete(s[start])
            start++
        }
        charSet.add(s[end])
        maxLength=Math.max(maxLength,end-start+1)
    }
    console.log(charSet);
    return maxLength
}

console.log(longestSubString("abcabcbb"));
