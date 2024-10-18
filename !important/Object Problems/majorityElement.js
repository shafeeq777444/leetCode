function majority(x) {
    const obj = {};
    x.map((y) => {
        if(obj[y]){
            obj[y]+=1
        }
        else{
            obj[y]=1
        }
    })
     maxValue=-Infinity
     maxKey=null
    for(key in obj){
       if(maxValue<obj[key]){
        maxValue=obj[key]
        maxKey=key
    }
    }
    return maxKey
}

console.log(majority([3, 2, 3]));
