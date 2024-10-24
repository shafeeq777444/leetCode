function reverse(word){
y=word.split(" ").reverse().filter(x=>x.length!=0).join(" ")
console.log(y);
}
reverse("a good   example")