import axios from "axios";

const BASE_URL = "https://jobsearch.api.jobtechdev.se/search";

interface IApiResponse<T> {
  hits: T[];
}

export const get = async <T>(endpoint: string): Promise<T[]> => {
  try {
    console.log(`Anropar: ${BASE_URL}${endpoint}`);
    const response = await axios.get<IApiResponse<T>>(`${BASE_URL}${endpoint}`);
    console.log("API-svar:", response.data);
    return response.data.hits;
  } catch (error) {
    console.error("API-anropet misslyckades:", error);
    throw error;
  }
};
