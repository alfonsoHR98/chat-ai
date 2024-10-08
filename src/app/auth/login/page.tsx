"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { SiOpenai } from "react-icons/si";

function LoginPage() {
  const handleSignIn = async () => {
    await signIn("google", {
      redirectTo: "/",
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 h-auto sm:h-[60vh] mx-auto flex flex-col sm:flex-row items-center justify-center ">
        {/* Sección Izquierda (solo visible en pantallas medianas en adelante) */}
        <div className="hidden sm:flex flex-1 flex-col items-center justify-center p-4">
          <SiOpenai className="w-3/4 h-3/4 sm:w-2/5 sm:h-2/5" />
          <span className="font-bold text-2xl md:text-3xl lg:text-4xl">
            Open AI
          </span>
        </div>

        {/* Sección Derecha */}
        <div className="w-[70%] sm:w-1/2 flex flex-col mx-4 sm:mx-8 gap-4 py-4 px-6 sm:p-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-4">
            Open AI <span className="text-neutral-400">Chatbot</span>
          </h1>
          <p className="text-center text-sm sm:text-base lg:text-lg text-gray-500">
            Utiliza nuestro chat para obtener respuestas rápidas y precisas a
            tus preguntas. Nuestro asistente virtual está aquí para ayudarte con
            cualquier consulta que tengas.
          </p>
          <button
            className="flex items-center justify-center m-auto gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
            onClick={handleSignIn}
          >
            <FcGoogle className="text-xl" />
            <span className="text-sm sm:text-base lg:text-lg">
              Iniciar sesión con Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
