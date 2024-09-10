// // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// var twoSum = function(nums, target) {
//     for(i=0;i<nums.length;i++){
//         for(j=0;j<nums.length;j++){
//             if( i!=j && nums[i]+nums[j]==target ){
//                 return [i,j] 

//         }
//     }
// }};
// console.log(twoSum([2,7,11,15],9));

// // divided numbers with truch
// var divide = function(dividend, divisor) {
//     r= dividend/divisor
//     console.log(Math.truch(r));
     
// };
// divide(-2147483648,-1)



// Remove the duplicates in-place such that each unique element appears only once. 
// var removeDuplicates = function(nums) {
//     newarr=[]
//     nums.map((x,ind)=>{
//         if(nums.indexOf(x)==ind){
// newarr.push(nums[ind])
//         }

//     })
//     return newarr;
    
// }

// console.log(removeDuplicates([1,1,2]));

// Given a string s consisting of words and spaces, return the length of the last word in the string.
var lengthOfLastWord = function(s) {
    x=s.trim().split(' ')
    return (x[x.length-1].length);
};
console.log(lengthOfLastWord("Hello World"));

