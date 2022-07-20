const stringLength = (string) => string.split('').length;

describe('your string is', () => {
  test('3 letters long', () => {
    expect(stringLength('dog')).toBe(3);
  });
});