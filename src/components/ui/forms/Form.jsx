import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

const Form = ({ fields, onSubmit, submitButtonText }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Determina si usar grid o diseño vertical basado en la cantidad de campos
  const isGridLayout = fields.length > 2;

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`mx-auto gap-4 ${
          isGridLayout
            ? "grid grid-cols-1 sm:grid-cols-2 md:w-xl lg:w-3xl"
            : "flex flex-col w-full sm:w-lg"
        }`}
      >
        {fields.map((field, index) => (
          <div key={index}>
  
            <label
              htmlFor={field.name}
              className="block text-primary font-semibold mb-2 text-sm sm:text-base"
            >
              {field.label}
            </label>

            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition duration-200"
              {...register(field.name, {
                required: field.required ? "Este campo es obligatorio" : false,
                pattern: field.pattern
                  ? { value: field.pattern, message: field.patternMessage }
                  : undefined,
              })}
            />

            {errors[field.name] && (
              <span className="text-red-500 text-xs sm:text-sm mt-1 block">
                {errors[field.name]?.message}
              </span>
            )}
          </div>
        ))}

        <div className="flex flex-col items-center justify-center gap-4 my-4 col-span-full">
          <button
            type="submit"
            className="w-full sm:w-1/2 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition duration-200"
          >
            {submitButtonText}
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-2 w-full sm:w-1/2 border border-primary text-primary rounded-lg py-3 hover:bg-gray-100 transition duration-200"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 256 262"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
              className="w-6 h-6"
            >
              <path
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                fill="#4285F4"
              />
              <path
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                fill="#34A853"
              />
              <path
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                fill="#FBBC05"
              />
              <path
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                fill="#EB4335"
              />
            </svg>
            Continuar con Google
          </button>
        </div>
      </form>
    </>
  );
};

Form.propTypes = {
  fields: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitButtonText: PropTypes.string.isRequired,
};

export default Form;