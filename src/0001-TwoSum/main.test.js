const twoSum = require('./main');

it('1. Two Sum', () => {
  const nums = [2, 7, 11, 15];
  const target = 9;

  expect(twoSum(nums, target)).toEqual([0, 1]);
});
