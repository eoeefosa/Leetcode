/***
 * Anagram Groups
 * Given an array of strings strs, group all anagrams together into sublists. 
 * You may return the output in any order.
 * An anagram is a string that contains the exact same characters 
 * as another string, but the order of the characters can be different.
 * Example 1:
 * Input: strs = ["act","pots","tops","cat","stop","hat"]
 * Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const ans = {};

  // each string in the array of strs
  for (const s of strs) {
    const count = Array(26).fill(0);
    for (const c of s) {
      count[c.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    const key = count.join("#");
    if (!ans[key]) {
      ans[key] = [];
    }

    ans[key].push(s);
  }

  return Object.values(ans);
};

console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]));
