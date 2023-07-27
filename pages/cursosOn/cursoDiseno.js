import React, { Component } from "react";
import Router from "next/router";

const CursoHTMLyTailwind = () => {
  return (
    <>
      <div class="bg-blue-400 h-screen w-full pt-5">
        <div class="bg-white w-5/6 mx-auto">
          <h1 class="text-center font-extrabold text-3xl">
            Bienvenido al curso de JavaScript
          </h1>
          <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold mb-6">
              Contenido del Curso de Diseño con HTML y Tailwind CSS
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">
                  Introducción al Diseño Web
                </h2>
                <p className="text-gray-700">
                  En esta lección, aprenderás los conceptos básicos de diseño
                  web, cómo seleccionar colores y fuentes adecuadas, y cómo
                  crear una paleta de colores para tu proyecto.
                </p>
              </div>

              <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">
                  Maquetación con HTML
                </h2>
                <p className="text-gray-700">
                  Aprenderás cómo estructurar y maquetar tu sitio web utilizando
                  HTML para crear una base sólida para el diseño.
                </p>
              </div>

              <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">
                  Estilización con Tailwind CSS
                </h2>
                <p className="text-gray-700">
                  En esta lección, te enseñaremos cómo utilizar Tailwind CSS
                  para estilizar tu sitio web de manera rápida y eficiente
                  utilizando clases utilitarias.
                </p>
              </div>

              <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">
                  Diseño Responsivo
                </h2>
                <p className="text-gray-700">
                  Aprenderás cómo crear un diseño responsivo que se adapte a
                  diferentes tamaños de pantalla y dispositivos utilizando media
                  queries y clases responsivas de Tailwind CSS.
                </p>
              </div>

              <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">
                  Animaciones y Transiciones
                </h2>
                <p className="text-gray-700">
                  En esta lección, exploraremos cómo agregar animaciones y
                  transiciones a tu diseño para mejorar la experiencia del
                  usuario.
                </p>
              </div>

              <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">
                  Optimización y Rendimiento
                </h2>
                <p className="text-gray-700">
                  Aprenderás técnicas para optimizar el rendimiento de tu sitio
                  web, como la compresión de imágenes y el código minificado.
                </p>
              </div>

              <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Proyecto Final</h2>
                <p className="text-gray-700">
                  En la última lección, crearás un proyecto completo de diseño
                  web utilizando HTML y Tailwind CSS para aplicar todo lo
                  aprendido.
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

export default CursoHTMLyTailwind;
