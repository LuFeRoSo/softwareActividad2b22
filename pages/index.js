import Router from "next/router";

/* eslint-disable @next/next/no-html-link-for-pages */
export default function Home() {
  return (
    <div class="bg-slate-300 h-screen">
      <div id="header" class="bg-white w-3/4 mx-auto p-5">
        <h1 class="text-3xl text-center font-extrabold mb-6">
          CURSOS DISPONIBLES
        </h1>
        <div class="grid grid-cols-3 gap-4">
          <a
            href="/cursos/cursoNode"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              CURSO DE PROGRAMACION EN NODE.JS
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              EN ESTE CURSO APRENDERAS LAS MEJORES PRACTICAS, CONSEJOS Y
              DOCUMENTACIONES SOBRE EL LENGUAJE NODE.JS DEL LADO DEL SERVIDOR O
              BACKEND
            </p>
          </a>
          <a
            href="/cursos/cursoJava"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              CURSO DE PROGRAMACION EN JAVASCRIPT
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              EN ESTE CURSO APRENDERAS LAS MEJORAS PRACTICAS PARA DESARROLLAR
              APLICACIONES CON EL LENGUAJE DE PROGRAMACION JAVASCRIPT
            </p>
          </a>
          <a
            href="/cursos/cursoDiseno"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              CURSO DE HTML Y TAILWIND
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              EN ESTE CURSO APRENDERAS COMO JUNTAR HTML CON TAILWIND PARA CREAR
              INTERFACES DE USUARIOS INCREIBLES
            </p>
          </a>
        </div>
        <div class="flex justify-center items-center mt-10">
          <button onClick={() => Router.push({pathname: "/login"})} class="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded">
            Acceder a los cursos
          </button>
        </div>
        <div class="flex justify-center items-center mt-10">
          <button onClick={() => Router.push({pathname: "/reporte"})} class="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded">
            Reporte de estudiantes Inscritos
          </button>
        </div>
      </div>
    </div>
  );
}
