import axios from 'axios';

const API_URL = 'http://localhost:8080/api/cards';

export async function getCardsBySetId(setId) {
    try {
      const response = await axios.get(`${API_URL}/set`, {
        params: { setId }, 
      });
      return response.data.data; 
    } catch (error) {
      console.error("Error fetching cards:", error);
      throw error; 
    }
}

export const getTradableCards = async () => {
  const response = await axios.get(`${API_URL}/tradable`);
  return response.data.data;
};

