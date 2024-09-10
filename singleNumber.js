// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    console.log(nums.filter((x)=>nums.indexOf(x)==nums.lastIndexOf(x))); 
 };
 singleNumber([2,2,1])
 singleNumber([4,1,2,1,2])