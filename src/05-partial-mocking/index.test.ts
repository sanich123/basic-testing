jest.mock('./index', () => {
  return {
    __esModule: true,
    ...jest.requireActual<typeof import('./index')>('./index'),
    mockOne: () => 'some fucking string',
    mockTwo: () => 'another fucking string',
    mockThree: 666,
  };
});

import { mockOne, mockTwo, mockThree, unmockedFunction } from './index';

describe('partial mocking', () => {
  afterAll(() => jest.unmock('./index'));

  test('mockOne, mockTwo, mockThree should not log into console', () => {
    expect(mockOne()).toEqual('some fucking string');
    expect(mockTwo()).toEqual('another fucking string');
    expect(mockThree).toEqual(666);
  });

  test('unmockedFunction should log into console', () => {
    jest.spyOn(global.console, 'log');
    unmockedFunction();
    expect(console.log).toBeCalled();
  });
});
