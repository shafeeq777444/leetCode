/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    score=0;
   for(i=0;i<s.length-1;i++){
       score+=Math.abs(s.charCodeAt(i)-s.charCodeAt(i+1))
   }
   return score
};
scoreOfString("hello")