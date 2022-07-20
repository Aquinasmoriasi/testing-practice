describe('The string,', () => {
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

describe('The string,', () => {
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

describe('The answer is,', () => {
  const calculator = {
    add: (...args) => args.reduce((a, b) => a + b),
    subtract: (a, b) => a - b,
    multiply: (...args) => args.reduce((a, b) => a * b),
    divide: (a, b) => a / b,
  };

  test('the sum of the numbers,', () => {
    expect(calculator.add(2, 3, 1)).toBe(6);
  });

  test('the sum of the numbers,', () => {
    expect(calculator.add(-2, 3, -1)).toBe(0);
  });

  test('the sum of the numbers,', () => {
    expect(calculator.add(1, 16)).toBe(17);
  });

  test('the product of the numbers,', () => {
    expect(calculator.multiply(2, 2, 2)).toBe(8);
  });

  test('the product of the numbers,', () => {
    expect(calculator.multiply(3, 0)).toBe(0);
  });

  test('the product of the numbers,', () => {
    expect(calculator.multiply(4, -2)).toBe(-8);
  });

  test('the difference between the two numbers,', () => {
    expect(calculator.subtract(3, 2)).toBe(1);
  });

  test('the difference between the two numbers,', () => {
    expect(calculator.subtract(3, 3)).toBe(0);
  });

  test('the difference between the two numbers,', () => {
    expect(calculator.subtract(2, 8)).toBe(-6);
  });

  test('the division of the two numbers,', () => {
    expect(calculator.divide(9, 0)).toBe(Infinity);
  });
  test('the division of the two numbers,', () => {
    expect(calculator.divide(9, 3)).toBe(3);
  });

  test('the division of the two numbers,', () => {
    expect(calculator.divide(-3, -3)).toBe(1);
  });
});

const capitalize = (string) => {
  const firstLetter = string.split('').slice(0, 1).toString().toUpperCase();
  const otherLetters = string.toLowerCase().split('').slice(1).join('');
  return firstLetter.concat(otherLetters);
};

test('The string is in toggle case', () => {
  expect(capitalize('DOG')).toBe('Dog');
});

test('The string is in toggle case', () => {
  expect(capitalize('DOG')).toBe('Dog');
});

test('The string is in toggle case', () => {
  expect(capitalize('dOG')).toBe('Dog');
});

test('The string is in toggle case', () => {
  expect(capitalize('mAPLe')).toBe('Maple');
});

test('The string is in toggle case', () => {
  expect(capitalize('Maple')).toBe('Maple');
});

test('The string is in toggle case', () => {
  expect(capitalize('maple')).toBe('Maple');
});