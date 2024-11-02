function defanging(address){
    return address.split(".").join("[.]")
}
console.log(defanging("1.1.1.1"));