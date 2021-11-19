/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
  if (digits.length === 0) {
    return []
  }

  let arr = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let results = ['']

  for (let i = 0; i < digits.length; i++) {
    const num = Number.parseInt(digits.charAt(i))
    const numChars = arr[num]
    let newResults = []

    for (let k = 0; k < results.length; k++) {
      for (let j = 0; j < numChars.length; j++) {
        let numChar = numChars[j]
        const result = results[k] + numChar
        newResults.push(result)
      }
    }

    results = newResults
  }

  return results
}

module.exports = letterCombinations
