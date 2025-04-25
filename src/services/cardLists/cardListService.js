import axios from 'axios';

const API_URL = 'http://localhost:8080/api/cardlists';

export const addCardToList = async (listId, cardId, token) => {
  await axios.post(`${API_URL}/${listId}/cards/${cardId}`, null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true
  });
};

export const removeCardFromList = async (listId, cardId, token) => {
  await axios.delete(`${API_URL}/${listId}/cards/${cardId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true
  });
};

export const getUserCardLists = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true
    });
    console.log('Respuesta del backend:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error en getUserCardLists:', error);
    throw error;
  }
};
