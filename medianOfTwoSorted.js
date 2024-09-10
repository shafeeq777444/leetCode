var findMedianSortedArrays = function(nums1, nums2) {
    nArr=[...nums1,...nums2]
    console.log(nArr);
   console.log(Math.trunc(nArr.reduce((acc,x)=>(acc+x)/2))); 
};
findMedianSortedArrays([1,3],[2])