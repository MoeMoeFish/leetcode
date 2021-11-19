// const algo = require('./main.js')
const algo = require('./adv.js')

describe('Letter Combinations of a Phone Number', () => {
  test('digits = "23"', () => {
    const ret = algo('23')
    expect(ret.sort()).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'].sort())
  })

  test('digits = ""', () => {
    const ret = algo('')
    expect(ret.sort()).toEqual([])
  })

  test('digits = "2"', () => {
    const ret = algo('2')
    expect(ret.sort()).toEqual(['a', 'b', 'c'].sort())
  })

  test('digits = "7"', () => {
    const ret = algo('7')
    expect(ret.sort()).toEqual(["p","q","r","s"].sort())
  })
})
