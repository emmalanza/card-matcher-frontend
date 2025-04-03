import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

export async function registerUser (data) {

    try {
        
        const payload = {
            ...data,
            playerId: data.playerId.trim() === "" ? null : data.playerId 
        };

        const response = await axios.post(`${API_URL}/register`, payload, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        return response.data;

    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || "Hubo un problema al registrar el usuario.");
        } else if (error.request) {
            throw new Error("No se recibió respuesta del servidor. Inténtalo de nuevo.");
        } else {
            throw new Error("Hubo un problema al configurar la solicitud. Inténtalo de nuevo.");
        }
    }

}

export async function loginUser (data) {

     try {
       const response = await axios.post(`${API_URL}/login`, data, {
         headers: {
           'Content-Type': 'application/json',
         },
       });
       
       localStorage.setItem('token', response.data.token);
       console.log(localStorage.getItem("token"));
 
     } catch (error) {
       if (error.response && error.response.status === 401) {
         console.log('Usuario o contraseña incorrectos.');
       } else {
         console.log('Error al intentar iniciar sesión. Por favor, inténtalo más tarde.');
       }
     }

}