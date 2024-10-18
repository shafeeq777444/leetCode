function median(a,b){
    c=a.concat(b)
    d=c.sort((a,b)=>(a-b))
    q=d.length
    if(d.length%2!=0){
        k=d[parseInt(q/2)]
    }
    else{
        k=(d[q/2]+d[(q/2)-1])/2
    }
    return k
    
}
median([1,3],[2,4])
