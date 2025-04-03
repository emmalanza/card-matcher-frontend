import React  from "react";
import { useNavigate } from "react-router-dom"; 
import { registerUser } from "@services/auth/authService";
import Form from "@components/ui/forms/Form";
import { emailRegex, passwordRegex, usernameRegex, playerIdRegex } from "@utils/regex";

const RegisterForm = () => {
    const navigate = useNavigate();  

     const fields = [
       {
         label: 'Email',
         type: 'email',
         name: 'email',
         placeholder: 'Introduce tu email',
         required: true,
         pattern: emailRegex,
         patternMessage: 'Por favor ingresa un email válido'
       },
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
        label: "Contraseña",
        type: "password",
        name: "password",
        placeholder: "Introduce tu contraseña",
        required: true,
        pattern: passwordRegex,
        patternMessage: "La contraseña debe tener al menos 6 caracteres"
    },
    {
        label: "TCGP ID",
        type: "text",
        name: "playerId",
        placeholder: "Introduce tu TCGP ID (formato: 0000-0000-0000-0000)",
        required: false, 
        pattern: playerIdRegex, 
        patternMessage: "El formato del ID debe ser: 0000-0000-0000-0000"
    }
     ];
   
     const handleRegister = async (data) => {
        try {
            console.log("registrando usuario....")
            const result = await registerUser(data);
            console.log("result", result);
            navigate('/login');
          } catch (error) {
            console.error("Error al registrar", error.message);

          }
     };
   
     return (
        <div className="bg-white p-4 sm:p-8 md:p-10 rounded-lg w-full md:w-2xl lg:w-4xl 
        flex flex-col justify-center items-center min-h-screen md:min-h-2/3">

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary font-bold italic my-6 text-center w-full">
            Crea tu cuenta
          </h2>
    
            <Form fields={fields} onSubmit={handleRegister} submitButtonText="Registrarse" />

          <p className="mt-6 text-primary text-sm sm:text-base">
            ¿Ya tienes una cuenta?{" "}
            <a href="/login" className="text-secondary hover:underline">
              Inicia Sesión
            </a>
          </p>

        </div>
      );
};

export default RegisterForm;
