import axios, { AxiosResponse } from 'axios';

export const API_BASE_URL = 'http://127.0.0.1:8000/';

export async function fetchData<T>(endpoint: string, params?: Record<string, unknown>): Promise<T | null> {
  try {
    const response: AxiosResponse<T> = await axios({
      method: "get",
      url: `${API_BASE_URL}${endpoint}`,
      params: params !== undefined ? params : {},
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
