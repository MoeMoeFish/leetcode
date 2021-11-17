const algo = require('./main.js')

describe('3Sum Closest', () => {
  test('nums = [-1,2,1,-4], target = 1', () => {
    expect(algo([-1,2,1,-4], 1)).toBe(2);
  });
  test('nums = [0,0,0], target = 1', () => {
    expect(algo([0,0,0], 1)).toBe(0);
  });
})
