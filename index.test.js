const stringLength = (string) => string.split('').length;

describe('your string,', () => {
  test('is 3 letters long', () => {
    expect(stringLength('dog')).toBe(3);
  });
  test('has at least one character', () => {
    expect(stringLength('')).toBeFalsy();
  });
  test('is not longer than 10 chracters', () => {
    expect(stringLength('client')).toBeLessThanOrEqual(10);
  });
});