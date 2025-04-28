import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

export async function registerUser(data) {
  try {
    const payload = {
      ...data,
      playerId: data.playerId.trim() === "" ? null : data.playerId,
    };

    const response = await axios.post(`${API_URL}/register`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      const { status, message } = error.response.data;

      if (status === 400) {
        return { error: message };  
      }

      return { error: message || "Hubo un problema al registrarse." };
    }

    return { error: "Hubo un problema al registrarse. Por favor, inténtalo más tarde." };
  }
}


export async function loginUser(data) {

  try {
    const response = await axios.post(`${API_URL}/login`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;

  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        return { error: 'Usuario o contraseña incorrectos.' };
      } else if (error.response.status === 500) {
        return { error: 'Error al intentar iniciar sesión. Por favor, inténtalo más tarde.' };
      } else {
        return { error: 'Algo salió mal. Por favor, inténtalo nuevamente.' };
      }
    } else {
      return { error: 'No se pudo conectar con el servidor. Verifica tu conexión a Internet.' };
    }
  }

}