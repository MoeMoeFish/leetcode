const algo = require('./main');

it('Longest Substring Without Repeating Characters', () => {
  expect(algo('abcabcbb')).toEqual(3);
  expect(algo('bbbbb')).toEqual(1);
  expect(algo('pwwkew')).toEqual(3);
});
