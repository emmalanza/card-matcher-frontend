import React from 'react';
import { loginUser } from "@services/auth/authService";
import { usernameRegex, passwordRegex } from '@utils/regex';
import { useNavigate } from "react-router-dom";
import Form from '@components/ui/forms/Form';

const LoginForm = () => {
  const navigate = useNavigate();

  const fields = [
    {
      label: "Nombre de usuario",
      type: "text",
      name: "username",
      placeholder: "Introduce tu nombre de usuario",
      required: true,
      pattern: usernameRegex,
      patternMessage: "El nombre de usuario debe tener al menos 3 caracteres alfanuméricos"
    },
    {
      label: 'Contraseña',
      type: 'password',
      name: 'password',
      placeholder: 'Introduce tu contraseña',
      required: true,
      pattern: passwordRegex,
      patternMessage: 'La contraseña debe tener al menos 6 caracteres'
    }
  ];

  const handleLogin = async (data) => {
    try {
      console.log("iniciando sesión....")
      const result = await loginUser(data);
      console.log("result", result);
      navigate('/');
    } catch (error) {
      console.error("Error al registrar", error.message);

    }
  };

  return (
    <div className="bg-white p-4 sm:p-8 md:p-10 rounded-lg w-full md:max-w-xl lg:max-w-2xl overflow-scroll
    flex flex-col justify-center items-center min-h-screen md:min-h-2/3">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary font-bold italic my-6 text-center w-full">
        ¡Hola de nuevo!
      </h2>
      <Form fields={fields} onSubmit={handleLogin} submitButtonText="Iniciar sesión" />

      <p className="mt-6 text-primary text-sm sm:text-base">
        ¿Todavía no tienes una cuenta?{" "}
        <a href="/register" className="text-secondary hover:underline">
          Regístrate
        </a>
      </p>

    </div>
  );
};

export default LoginForm;
