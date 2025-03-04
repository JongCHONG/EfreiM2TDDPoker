const { compareHands } = require('./poker');

test('compareHands should return 1 when right hand is stronger', () => {
  expect(compareHands(['fullHouse'], ['pair'])).toBe(1);
});

test('compareHands should return -1 when left hand is stronger', () => {
  expect(compareHands(['pair'], ['fullHouse'])).toBe(-1);
});

test('compareHands should return 0 when both hands are equal', () => {
  expect(compareHands(['pair'], ['pair'])).toBe(0);
});

test('compareHands should return 1 when right hand is royalFlush and left hand is straightFlush', () => {
  expect(compareHands(['royalFlush'], ['straightFlush'])).toBe(1);
});

test('compareHands should return -1 when left hand is fourOfAKind and right hand is fullHouse', () => {
  expect(compareHands(['fullHouse'], ['fourOfAKind'])).toBe(-1);
});

test('compareHands should return 0 when both hands are highCard', () => {
  expect(compareHands(['highCard'], ['highCard'])).toBe(0);
});