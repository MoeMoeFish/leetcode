/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let n = 0;
  if (s.length === 0) {
    return n;
  }

  let m = 0;
  let begin = 0;
  let cur = begin;
  while (true) {
    const sub = {};
    for (cur = begin; cur < s.length; cur++) {
      const char = s[cur];
      const pos = sub[char];
      if (pos) {
        if (m > n) {
          n = m;
          m = 0;
        }

        begin = pos + 1;
      } else {
        sub[char] = cur;
        m += 1;
      }
    }

    if (cur >= s.length - 1) {
      if (m > n) {
        n = m;
        m = 0;
      }

      break;
    }
  }

  return n;
};

module.exports = lengthOfLongestSubstring;
