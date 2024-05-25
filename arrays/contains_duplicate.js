/**
 * @param {number[]} nums
 * @return {boolean}
 */
var oldcontainsDuplicate = function (nums) {
  var unique = [];

  nums.forEach((num) => {
    if (unique.includes(num)) {
      console.log("true");
      return true;
    } else {
      unique.push(num);
    }
  });
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate_foreach = function (nums) {
  var unique = [];

  var value = false;
  nums.forEach((num) => {
    if (unique.includes(num)) {
      value = true;
      return true;
    } else {
      console.log(unique);
      unique.push(num);
    }
    // value = false;
    return true;
  });

  // console.log(value);
  return value;
};

var containsDuplicate_forloop = function (nums) {
  var unique = [];

  // var value = false;

  for (var i = 0; i < nums.length; i++) {
    console.log(i);
    if (unique.includes(nums[i])) {
      return true;
    } else {
      console.log(unique);
      unique.push(nums[i]);
    }
  }
  return false;
};

var containsDuplicate = (nums) => {
  const numsSet = new Set(nums);
  const isEqual = numsSet.size === nums.length;
  return !isEqual;
};

var checkzero = function (num) {
  var unique = [0];
};
// console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([0, 4, 5, 9, 3, 6]));
