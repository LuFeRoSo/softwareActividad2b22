import React from "react";
import { useState } from "react";

const CourseRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    curso: 'node',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/estudiantes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario.');
      }

      const data = await response.json();
      console.log('Estudiante registrado:', data);
      // Puedes realizar alguna acción adicional después de guardar exitosamente el estudiante en la base de datos.
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
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
    <div className="bg-slate-300 p-6 rounded shadow h-screen">
      <div className="bg-white border-2 border-black w-2/4 mx-auto">
        <h2 className="text-2xl text-center font-extrabold mb-4">
          Formulario de Inscripción
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="">
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="name"
              >
                Nombres completos:
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="name"
              >
                Contraseña:
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                required
              />
            </div>
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
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="email"
              >
                Nombre del curso:
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                type="curso"
                id="curso"
                name="curso"
                defaultValue="node"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded"
                type="submit"
              >
                Enviar Inscripción
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseRegistrationForm;
