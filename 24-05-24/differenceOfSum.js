function differenceOfSum(nums){
    x= nums.reduce((acc,x)=>acc+x)
    y=nums.join("").split("").map(Number).reduce((acc,x)=>acc+x)
    return x-y
}
console.log(differenceOfSum([1,15,6,3]));