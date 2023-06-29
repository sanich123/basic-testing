import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  test('should generate linked list from values 1', () => {
    const linkedList = generateLinkedList([1, 2, 3]);
    expect(linkedList.value).toStrictEqual(1);
  });
  test('should generate linked list from values 2', () => {
    const linkedList = generateLinkedList([2, 3, 4]);
    expect(linkedList).toMatchSnapshot();
  });
});
