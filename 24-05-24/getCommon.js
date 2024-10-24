function getCommon(num1,num2){
    arr=[]
    a=num1.length
    b=num2.length
    c=Infinity
    for(i=0;i<a;i++){
        for(j=0;j<b;j++){
            if(num1[i]==num2[j]&&num1[i]<c){
                c=num1[i]
            }
        }
    }
    return c
    
}
console.log(getCommon([2,3,1],[2,3,4]));
