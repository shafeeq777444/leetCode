/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    const map=new Map()
    for(num of arr){
      if ( map.has(num*2)  || num%2===0 && map.has(num/2)){
        return true
      }
      map.set(num)
    }
return false
    
};

console.log(checkIfExist([1,3,5]))