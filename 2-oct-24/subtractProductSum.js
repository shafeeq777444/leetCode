const subtract=(n)=>{
    x= n.toString().split("").map(Number)
    return x.reduce((acc,x)=>acc*x)-x.reduce((acc,x)=>acc+x)


}
console.log(subtract(234));