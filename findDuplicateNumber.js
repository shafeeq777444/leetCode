var firstMissingPositive = function(nums) {
    nArr=nums.filter(num => num > 0);
    nArr.sort((a,b)=> {return a-b })
    console.log(nArr);
    for(i=0;i<=Infinity;i++){
       if(nArr[i]!=i+1){return i+1}
    }
};
console.log(firstMissingPositive([1]));