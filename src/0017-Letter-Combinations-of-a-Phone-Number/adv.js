/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
  if (digits.length === 0) {
    return []
  }

  const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  }

  const result = []
  function recursive(pos, curr) {
    if (pos === digits.length) {
      result.push(curr)
      return result
    }

    for (let letter of map[digits.charAt(pos)]) {
      recursive(pos + 1, curr + letter)
    }
  }

  recursive(0, '')

  return result
}

module.exports = letterCombinations
