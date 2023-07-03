import { simpleCalculator, Action } from './index';

type testCasesType = {
  a: number | undefined | null;
  b: number | undefined | null;
  action: Action | string;
  expected: number | null;
}[];

describe('simpleCalculator', () => {
  const testCasesAdd: testCasesType = [
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: 2, b: 2, action: Action.Add, expected: 4 },
    { a: 3, b: 2, action: Action.Add, expected: 5 },
  ];

  it.each(testCasesAdd)(
    `should correctly add numbers`,
    ({ a, b, action, expected }) =>
      expect(simpleCalculator({ a, b, action })).toEqual(expected),
  );

  const testCasesSubtract: testCasesType = [
    { a: 1, b: 2, action: Action.Subtract, expected: -1 },
    { a: 2, b: 2, action: Action.Subtract, expected: 0 },
    { a: 3, b: 2, action: Action.Subtract, expected: 1 },
  ];

  it.each(testCasesSubtract)(
    `should correctly subtract numbers`,
    ({ a, b, action, expected }) =>
      expect(simpleCalculator({ a, b, action })).toEqual(expected),
  );

  const testCasesMultiply: testCasesType = [
    { a: 1, b: 2, action: Action.Multiply, expected: 2 },
    { a: 2, b: 2, action: Action.Multiply, expected: 4 },
    { a: 3, b: 2, action: Action.Multiply, expected: 6 },
  ];

  it.each(testCasesMultiply)(
    `should correctly multiply numbers`,
    ({ a, b, action, expected }) =>
      expect(simpleCalculator({ a, b, action })).toEqual(expected),
  );

  const testCasesDivide: testCasesType = [
    { a: 4, b: 2, action: Action.Divide, expected: 2 },
    { a: 6, b: 2, action: Action.Divide, expected: 3 },
    { a: 8, b: 2, action: Action.Divide, expected: 4 },
  ];

  it.each(testCasesDivide)(
    `should correctly divide numbers`,
    ({ a, b, action, expected }) =>
      expect(simpleCalculator({ a, b, action })).toEqual(expected),
  );

  const testCasesExponentiate: testCasesType = [
    { a: 4, b: 2, action: Action.Divide, expected: 2 },
    { a: 6, b: 2, action: Action.Divide, expected: 3 },
    { a: 8, b: 2, action: Action.Divide, expected: 4 },
  ];

  it.each(testCasesExponentiate)(
    `should correctly exponentiate numbers`,
    ({ a, b, action, expected }) =>
      expect(simpleCalculator({ a, b, action })).toEqual(expected),
  );

  const testCasesErrors: testCasesType = [
    { a: 4, b: 2, action: 'some action', expected: null },
    { a: 6, b: null, action: Action.Divide, expected: null },
    { a: undefined, b: 2, action: Action.Divide, expected: null },
  ];
  it.each(testCasesErrors)(
    `should correctly handle errors`,
    ({ a, b, action, expected }) =>
      expect(simpleCalculator({ a, b, action })).toEqual(expected),
  );
});
