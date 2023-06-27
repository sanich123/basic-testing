import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    expect(simpleCalculator({ a: 5, b: 5, action: Action.Add })).toEqual(10);
  });

  test('should subtract two numbers', () => {
    expect(
      simpleCalculator({ a: 250000, b: 15000, action: Action.Subtract }),
    ).toEqual(235000);
  });

  test('should multiply two numbers', () => {
    expect(simpleCalculator({ a: 10, b: 10, action: Action.Multiply })).toEqual(
      100,
    );
  });

  test('should divide two numbers', () => {
    expect(simpleCalculator({ a: 39, b: 3, action: Action.Divide })).toEqual(
      13,
    );
  });

  test('should exponentiate two numbers', () => {
    expect(
      simpleCalculator({ a: 3, b: 3, action: Action.Exponentiate }),
    ).toEqual(27);
  });

  test('should return null for invalid action', () => {
    expect(simpleCalculator({ a: 3, b: 3, action: 'some action' })).toEqual(
      null,
    );
  });

  test('should return null for invalid arguments', () => {
    expect(
      simpleCalculator({ a: 3, b: undefined, action: Action.Add }),
    ).toEqual(null);
  });
});
