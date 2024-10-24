function longestConsecutive(nums){
  return  a=nums.reduce((acc,x)=>{
    ini=0
        z=x.toString().split("")
        if(z.length>ini){
            ini=z.length
            return x
        }
       
    },0)
    

}
console.log(longestConsecutive([1001,20,20,10]));
