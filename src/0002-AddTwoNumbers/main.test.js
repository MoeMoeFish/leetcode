const algo = require('./main');
const toList = require('./common').toList;
const toArray = require('./common').toArray;

it('2. Add Two Numbers', () => {
  expect(toArray(algo(toList([2, 4, 3]), toList([5, 6, 4])))).toEqual([7, 0, 8]);
});
