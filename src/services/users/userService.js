import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';

export const getCurrentUser = async (token) => {

    const response = await axios.get(`${API_URL}/me`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        withCredentials: true
    });
    return response.data.data;
};


export const getUserCardLists = async (token) => {
    try {
      const response = await axios.get(`${API_URL}/cardlists`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true
      });
      return response.data.data;
    } catch (error) {
      console.error('Error en getUserCardLists:', error);
      throw error;
    }
  };