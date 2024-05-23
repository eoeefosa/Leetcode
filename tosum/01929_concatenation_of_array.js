/**
 * Given an integer array nums of length n, you want to create array ans of length 2n where
 * ans[i]= numb[i] an ans[i+n]==num[i] for 0<= i<n (0-indexed)
 */

// var getConcatenation = function (nums) {
//   //   const ans = [...nums,...nums];
//   return nums.concat(nums);
//   //   return ans;
// };

// const time = Date.now().toPrecision;
// const test = getConcatenation([1, 2, 3]);
// const endtime = Date.now();
// console.log(endtime - time);

// console.log(test);

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var getConcatenation = function (nums) {
//   let ans = [];
//   for (let i = 0; i < 2; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       ans.push(nums[j]);
//     }
//   }
//   return ans;
// };

const soreed = [2, 1, 4].sort();
console.log(soreed);

const median = soreed.length / 2;
console.log(median.toFixed());
