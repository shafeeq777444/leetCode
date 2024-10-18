var removeElement = function (nums, val) {
    i = 0;
   const u = nums.filter((x) => x != val);
   und = nums.length - u.length;
   while (i < und) {
       u.push("_");
       i++;
   }

   return u
};

console.log(removeElement([3,2,2,3],3));