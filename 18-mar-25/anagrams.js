/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    map = new Map();

    for (let str of strs) {
        const sortedStr = str.split("").sort().join();

        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    } 
    return Array.from(map.values()) //iterator object -> Array
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
