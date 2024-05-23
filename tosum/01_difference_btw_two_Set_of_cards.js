/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} x
 * @return {number}
 */
const differencein2car = (nums1, nums2, x) => {
  var count = 0;
  nums1.forEach((num) => {
    nums2.forEach((num2) => {
      const answer = num - num2;
      if (answer > 0) {
        if (answer >= x) {
          count++;
          console.log(`$num  $num2`);
        }
      } else {
        if (answer >= -x) {
          count++;
          console.log(`${num}  ${num2}`);

          //   console.log(num + num2);
        }
      }
    });
  });
  console.log("differencein2car " + count);
  return count;
};
console.log(differencein2car([4, 5, 8], [10, 9, 1, 8], 2));
