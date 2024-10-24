function reverse(s){
    y=s.split("")
    arr=[];
    for(i=0;i<y.length;i++){
      if (y[i]=="i") {
        arr.reverse()
      }
      else{
        arr.push(y[i])
      }
      console.log(arr);
    }
    return arr.join("")
}

console.log(reverse("string"));