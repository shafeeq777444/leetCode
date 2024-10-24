function alterAdd(n){
    // in normal have have want return only but map return the same number of array so inidividual return include
    x=n.toString().split("").map((x,ind)=>{
        if(ind%2==0){
            return Number(x)
        }
        else{
           return -parseInt(x)
        }
    })
    return x.reduce((acc,x)=>acc+x)

}
console.log(alterAdd(521));