import axios from "axios";

const BASE_URL = "https://jobsearch.api.jobtechdev.se/search";

export const get = async <T>(endpoint: string): Promise<T> => {
  const response = await axios.get<T>(`${BASE_URL}${endpoint}`);
  return response.data;
};
