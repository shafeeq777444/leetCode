/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const bracketMap = { ')': '(', '}': '{', ']': '[' };

    for(let char of s){
        if(bracketMap[char]){
           const removeChar= stack.pop() //
           if(removeChar!==bracketMap[char]){
            return false
           }
        }
        else{
            stack.push(char)
        }
    }
    return stack.length==0
};

console.log(isValid("[]")) //[([])]