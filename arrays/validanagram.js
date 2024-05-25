class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }

    const countS = {};
    const countT = {};

    for (let i = 0; i < s.length; i++) {
      countS[s[i]] = 1 + (countS[s[i]] || 0);
      countT[t[i]] = 1 + (countT[t[i]] || 0);
    }

    for (const key in countS) {
      if (countS[key] !== countT[key]) {
        return false;
      }
    }

    return true;
  }
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const smap = {};
  const tmap = {};

  for (var i = 0; i < s.length; i++) {
    smap[s[i]] = 1 + (smap[s[i]] || 0);
    tmap[t[i]] = 1 + (tmap[t[i]] || 0);
  }

  for (const key in smap) {
    console.log(key);
    if (smap[key] !== tmap[key]) {
      console.log(false);
      return false;
    }
  }
  return true;
};

var isAnagram_for = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const smap = {};
  const tmap = {};

  for (var i = 0; i < s.length; i++) {
    smap[s[i]] = 1 + (smap[s[i]] || 0);
    tmap[t[i]] = 1 + (tmap[t[i]] || 0);
  }

  for (const key in smap) {
    console.log(key);
    if (smap[key] !== tmap[key]) {
      console.log(false);
      return false;
    }
  }

  return true;
};

console.log(isAnagram("Ket", "key"));
