import { doStuffByInterval, doStuffByTimeout } from '.';
describe('doStuffByTimeout', () => {
  beforeAll(() => jest.useFakeTimers());
  afterAll(() => jest.useRealTimers());

  test('should set timeout with provided callback and timeout', () => {
    const setTimeoutSpy = jest.spyOn(global, 'setTimeout');
    const callbackFn = jest.fn();
    doStuffByTimeout(callbackFn, 2000);
    expect(setTimeoutSpy).toHaveBeenCalled();
    expect(setTimeoutSpy).toHaveBeenLastCalledWith(callbackFn, 2000);
  });

  test('should call callback only after timeout', () => {
    const callbackFn = jest.fn();
    doStuffByTimeout(callbackFn, 3000);
    expect(callbackFn).not.toBeCalled();
    jest.runAllTimers();
    expect(callbackFn).toBeCalled();
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => jest.useFakeTimers());
  afterAll(() => jest.useRealTimers());

  test('should set interval with provided callback and timeout', () => {
    const setTimeoutSpy = jest.spyOn(global, 'setInterval');
    const callbackFn = jest.fn();
    doStuffByInterval(callbackFn, 2000);
    expect(setTimeoutSpy).toHaveBeenCalled();
    expect(setTimeoutSpy).toHaveBeenLastCalledWith(callbackFn, 2000);
  });

  test('should call callback multiple times after multiple intervals', () => {
    const callbackFn = jest.fn();
    doStuffByInterval(callbackFn, 2000);
    jest.advanceTimersByTime(10000);
    expect(callbackFn).toHaveBeenCalledTimes(5);
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    // Write your test here
  });

  test('should return null if file does not exist', async () => {
    // Write your test here
  });

  test('should return file content if file exists', async () => {
    // Write your test here
  });
});
