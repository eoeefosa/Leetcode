/**
 * You are given an integer array nums. In one move, you can pick an index i where 0 <= i < nums.length and increment nums[i] by 1.
 * Return the minimum number of moves to make every value in nums unique.
 * The test cases are generated so that the answer fits in a 32-bit integer.
 *
 * Example 1:
 * Input: nums = [1,2,2]
 * Output: 1
 * Explanation: After 1 move, the array could be [1, 2, 3].
 *
 *
 * Example 2:
 * Input: nums = [3,2,1,2,1,7]
 * Output: 6
 * Explanation: After 6 moves, the array could be [3, 4, 1, 2, 5, 7].
 * It can be shown with 5 or less moves that it is impossible for the array to have all unique values.
 */

/**
 * @param {number[]} nums
 * @return {number}
 *
 * Time exceeded with hashmap version
 */
var minIncrementForUnique_time = function (nums) {
  var minuniqe = 0;
  const uniquemap = {};

  console.log(nums);

  for (var i = 0; i < nums.length; i++) {
    while (uniquemap[nums[i]] === 1) {
      var resent = nums[i];
      nums[i] = resent + 1;
      minuniqe++;
      console.log("already exist " + nums[i]);
    }
    uniquemap[nums[i]] = 1;
  }

  return minuniqe;
};

/**
 * @param {number[]} nums
 * @return {number}
 * using sorting
 * runtime 2719 ms
 * memory 61.7 MB
 */
var minIncrementForUnique_long = function (nums) {
  var minuniqe = 0;
  nums.sort((a, b) => a - b);

  //   console.log(nums);

  for (var i = 1; i < nums.length; i++) {
    while (nums[i] === nums[i - 1] || nums[i] < nums[i - 1]) {
      var newvale = nums[i];
      nums[i] = newvale + 1;
      minuniqe++;
    }
  }
  return minuniqe;
};

/**
 * @param {number[]} nums
 * @return {number}
 * runtime 	220 ms
 * memory 61.2 MB
 */
var minIncrementForUnique_runtime = function (nums) {
  nums.sort((a, b) => a - b);
  let moves = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      const original = nums[i];
      nums[i] = nums[i - 1] + 1;
      moves += nums[i] - original;
    }
  }
  return moves;
};

/**
 * @param {number[]} nums
 * @return {number}
 * runtime  75 ms
 * memory 61.1 MB
 */

function minIncrementForUnique_(nums) {
  const max = Math.max(...nums);
  //   console.log(max);
  const bucket = new Array(max + 1).fill(0);
  //   console.log(bucket);
  for (let i = 0; i < nums.length; i++) {
    bucket[nums[i]]++;
  }
  console.log(bucket);

  let moves = 0;
  for (let cur = 0, next = 0; cur <= max; cur++) {
    while (bucket[cur]-- > 1) {
      if (cur > next) next = cur + 1;
      while (bucket[next]) next++;
      moves += next - cur;
      next <= max ? bucket[next]++ : next++;
    }
  }
  return moves;
}

/**
 * @param {number[]} nums
 * @return {number}
 * Neetcode javascript
 * runtime 222 ms
 * Memory 61.5 MB
 */

function minIncrementForUnique(nums) {
  nums.sort((a, b) => a - b);
  var res = 0;
  for (var i = 1; i < nums.length; i++) {
    if (nums[i - 1] >= nums[i]) {
      res += 1 + nums[i - 1] - nums[i];
      nums[i] = nums[i - 1] + 1;
    }
  }

  return res;
}

// [1,1,2,2,3,7]
// console.log(minIncrementForUnique([1, 2, 2]));
console.log(minIncrementForUnique([3, 2, 1, 2, 1, 7]));
