function reverseWords(s){
    y=s.split(" ").map(x=>x.split("").reverse().join("")).join(" ")
    console.log(y);
}
reverseWords("hello    world")