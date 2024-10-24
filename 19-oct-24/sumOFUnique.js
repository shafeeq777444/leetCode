var sumOfUnique = function(nums) {
    const i=nums.filter(x=>nums.indexOf(x)==nums.lastIndexOf(x))
  
   return x=i.reduce((acc,x)=>acc+x,0)
   
};
sumOfUnique([1,2,3,3])