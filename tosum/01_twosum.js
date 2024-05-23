/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum_1stAttempt = function (nums, target) {
  const array = nums.length;

  for (i = 0; i < array; i++) {
    for (j = i + 1; j < array; j++) {
      const sum = nums[i] + nums[j];
      if (sum == target) {
        return [i, j];
      }
    }
  }
};

var twoSum = function (nums, target) {
  const prevMap = {};

  for (i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (diff in prevMap) {
      return [prevMap[diff], i];
    }
    prevMap[nums[i]] = i;
  }
};

// var twoSum = function(nums, target) {
//     const map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         if (map.has(complement)) {
//             return [map.get(complement), i];
//         }
//         map.set(nums[i], i);
//     }
//     return null;
// };

const result = twoSum([3, 3], 6);

console.log(result);

/**
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

// function twoSum(nums: number[], target: number): number[] {

// };
