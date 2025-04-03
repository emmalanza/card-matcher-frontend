import axios from 'axios';

const API_URL = 'http://localhost:8080/api/cards';

export async function getCardsBySetId(setId) {
    try {
      const response = await axios.get(`${API_URL}`, {
        params: { setId }, 
      });
      return response.data; 
    } catch (error) {
      console.error("Error fetching cards:", error);
      throw error; 
    }
  }