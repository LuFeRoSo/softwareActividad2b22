import React, { Component } from "react";
import Router from "next/router";
const CursoJava = () => {
  return (
    <>
      <div class="bg-blue-400 h-screen w-full pt-5">
        <div class="bg-white w-5/6 mx-auto">
          <h1 class="text-center font-extrabold text-3xl">
            Bienvenido al curso de JavaScript
          </h1>
          <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold mb-6">
              Contenido del Curso de JavaScript
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">
                  Introducción a JavaScript
                </h2>
                <p className="text-gray-700">
                  En esta lección, aprenderás los conceptos básicos de
                  JavaScript, incluyendo variables, tipos de datos, operadores y
                  estructuras de control.
                </p>
              </div>

              <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">
                  Funciones y Objetos
                </h2>
                <p className="text-gray-700">
                  Aprenderás cómo definir y utilizar funciones en JavaScript,
                  así como trabajar con objetos y propiedades.
                </p>
              </div>

              <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">
                  Arreglos y Bucles
                </h2>
                <p className="text-gray-700">
                  En esta lección, te enseñaremos cómo trabajar con arreglos,
                  utilizar bucles y implementar iteraciones en JavaScript.
                </p>
              </div>

              <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">DOM y Eventos</h2>
                <p className="text-gray-700">
                  Aprenderás cómo interactuar con el DOM (Modelo de Objetos del
                  Documento) y cómo manejar eventos en JavaScript para crear
                  interactividad en páginas web.
                </p>
              </div>

              <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">
                  AJAX y Fetch API
                </h2>
                <p className="text-gray-700">
                  En esta lección, aprenderás a hacer solicitudes AJAX
                  utilizando la Fetch API de JavaScript para obtener y enviar
                  datos a servidores.
                </p>
              </div>

              <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">
                  ES6 y Funciones Asíncronas
                </h2>
                <p className="text-gray-700">
                  Aprenderás las características más avanzadas de JavaScript,
                  como las mejoras de ES6 y cómo trabajar con funciones
                  asíncronas para manejar tareas asíncronas.
                </p>
              </div>

              <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Proyecto Final</h2>
                <p className="text-gray-700">
                  En la última lección, pondrás en práctica todo lo aprendido
                  para crear un proyecto completo utilizando JavaScript para una
                  aplicación web.
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

export default CursoJava;
