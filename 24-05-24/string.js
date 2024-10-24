var splitWordsBySeparator = function(words, separator) {
    return words.join(separator).split(separator).filter(x=>x.length!=0)
};


console.log(splitWordsBySeparator(["$easy$","$problem$"],"$"));