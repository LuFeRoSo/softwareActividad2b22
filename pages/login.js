import Router from "next/router";
import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        const data = await response.json();
        const { curso } = data;
        Router.push(`/cursosOn/${curso}`);
      } else if (response.status === 401) {
        console.log("Credenciales inválidas.");
      } else {
        console.log("Error al iniciar sesión.");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="border border-gray-300 p-4 rounded"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-semibold mb-4">Iniciar sesión</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="email"
          >
            Correo electrónico:
          </label>
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            type="email"
            id="email"
            name="email"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="password"
          >
            Contraseña:
          </label>
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            type="password"
            id="password"
            name="password"
            required
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded"
            type="submit"
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
