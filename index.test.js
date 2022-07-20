describe('your string,', () => {
  const stringLength = (string) => string.split('').length;
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

describe('your string,', () => {
  const reverseStr = (string) => string
    .split('')
    .reverse()
    .join('');

  test('was reversed', () => {
    expect(reverseStr('crop')).toBe('porc');
  });

  test('was reversed', () => {
    expect(reverseStr('song')).toBe('gnos');
  });
  test('was reversed', () => {
    expect(reverseStr('index')).toBe('xedni');
  });
});