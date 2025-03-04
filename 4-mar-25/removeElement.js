function removeElement(nums, val) {
    let k = 0; // Pointer for placement

    nums1.forEach((x,ind)=> {if(x!=val){
        nums[k]=nums[ind]
        k++
    }})
    return k
}
let nums1 = [3, 2, 2, 3];
console.log(removeElement(nums1, 3), nums1);