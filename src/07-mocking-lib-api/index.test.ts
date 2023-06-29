import axios from 'axios';
import { throttledGetDataFromApi } from './index';
jest.useFakeTimers();

describe('throttledGetDataFromApi', () => {
  test('should create instance with provided base url', async () => {
    const createSpy = jest.spyOn(axios, 'create');
    await throttledGetDataFromApi('/todos');
    expect(createSpy).toHaveBeenCalled();
  });

  test('should perform request to correct provided url', async () => {});

  test('should return response data', async () => {
    try {
      const todos = await throttledGetDataFromApi('/todos');
      expect(todos).toHaveLength(200);
    } catch (error) {
      console.log(error);
    }
  });
});
