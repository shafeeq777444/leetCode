/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let even=0
   nums.forEach(x=>Math.abs(x).toString().length % 2 == 0 ? even++:even)
   return even
    
};

console.log(findNumbers([55,901,482,1771]))