const threeSumClosest = function (nums, target) {
  let gap = Number.MAX_VALUE
  let result = 0
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 1; i++) {
    let j = i + 1
    let k = nums.length - 1

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k]
      if (sum < target) {
        j++
      } else if (sum > target) {
        k--
      } else {
        return target
      }

      const newGap = Math.abs(sum - target)
      if (newGap < gap) {
        gap = newGap
        result = sum
      }
    }
  }

  return result
}

module.exports = threeSumClosest
