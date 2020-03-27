/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const used = new Map();

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const sub = target - curr;

    const hasKey = used.has(sub);
    if (hasKey) {
      const subIndex = used.get(sub);
      return [subIndex, i];
    }

    used.set(curr, i);
  }
};

module.exports = twoSum;
