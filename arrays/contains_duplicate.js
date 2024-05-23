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
var containsDuplicate = function (nums) {
  var unique = [];

  var value = false;
  nums.forEach((num) => {
    if (unique.includes(num)) {
      value = true;
      return true;
    } else {
      console.log(num);
      unique.push(num);
    }
    value = false;
    return false;
  });

  // console.log(value);
  return value;
};



var checkzero = function (num) {
    var unique = [0]
    
 }
// console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([0, 4, 5, 0, 3, 6]));
