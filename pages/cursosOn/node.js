import React, { Component } from "react";
import Router from "next/router";
const CursoNode = ({ courseName, courseHistory }) => {
  return (
    <>
      <div class="bg-blue-400 h-screen w-full pt-5">
        <div class="bg-white w-5/6 mx-auto">
          <h1 class="text-center font-extrabold text-3xl">
            Bienvenido al curso de NODE.JS
          </h1>
          <div class="container mx-auto py-8">
            <h1 class="font-bold mb-6">Contenido del Curso de Node.js</h1>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="bg-white p-6 shadow-md rounded-lg">
                <h2 class="text-2xl font-semibold mb-4">
                  Introducción a Node.js
                </h2>
                <p class="text-gray-700">
                  En esta lección, aprenderás los conceptos básicos de Node.js y
                  cómo configurar tu entorno de desarrollo para trabajar con
                  Node.js.
                </p>
              </div>

              <div class="bg-white p-6 shadow-md rounded-lg">
                <h2 class="text-2xl font-semibold mb-4">Módulos y NPM</h2>
                <p class="text-gray-700">
                  Aprenderás cómo usar módulos en Node.js y cómo gestionar
                  paquetes de terceros con NPM.
                </p>
              </div>

              <div class="bg-white p-6 shadow-md rounded-lg">
                <h2 class="text-2xl font-semibold mb-4">
                  Servidores y Express
                </h2>
                <p class="text-gray-700">
                  En esta lección, te enseñaremos cómo crear un servidor web
                  usando el framework Express en Node.js.
                </p>
              </div>

              <div class="bg-white p-6 shadow-md rounded-lg">
                <h2 class="text-2xl font-semibold mb-4">
                  Bases de Datos con MongoDB
                </h2>
                <p class="text-gray-700">
                  Aprenderás cómo conectar y utilizar la base de datos MongoDB
                  con Node.js para almacenar y recuperar datos.
                </p>
              </div>

              <div class="bg-white p-6 shadow-md rounded-lg">
                <h2 class="text-2xl font-semibold mb-4">
                  Autenticación y Seguridad
                </h2>
                <p class="text-gray-700">
                  En esta lección, aprenderás a implementar la autenticación de
                  usuarios y las medidas de seguridad en una aplicación Node.js.
                </p>
              </div>

              <div class="bg-white p-6 shadow-md rounded-lg">
                <h2 class="text-2xl font-semibold mb-4">Proyecto Final</h2>
                <p class="text-gray-700">
                  En la última lección, pondrás en práctica todo lo aprendido
                  para crear un proyecto completo usando Node.js y Express.
                </p>
              </div>
            </div>
            <div class="mt-5">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded"
                onClick={() => Router.push({ pathname: "/cursosOn/historial" })}
              >
                Historial y estado del curso
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CursoNode;
