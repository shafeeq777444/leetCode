// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
var reverse = function(x) {
    const MAX = 2147483647; 
   const MIN = -2147483648;
   
    y = Math.sign(x)* parseInt(x.toString().split("").reverse().join(""));
    if(y>=MAX || y<=MIN){return 0}
  return y
};
console.log(reverse(-123));