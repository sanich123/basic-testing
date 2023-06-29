// import axios from 'axios';
import { throttledGetDataFromApi } from './index';
jest.useFakeTimers();
describe('throttledGetDataFromApi', () => {
  test('should create instance with provided base url', async () => {
    // Write your test here
  });

  test('should perform request to correct provided url', async () => {
    // Write your test here
  });

  test('should return response data', async () => {
    try {
      const todos = await throttledGetDataFromApi('/todos');
      expect(todos).toHaveLength(200);
    } catch (error) {
      console.log(error);
    }
  });
});
