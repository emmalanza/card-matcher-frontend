import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';

export const getCurrentUser = async (token) => {
    const response = await axios.get(`${API_URL}/me`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        withCredentials: true
    });

    console.log(response.data);

    return response.data;
};