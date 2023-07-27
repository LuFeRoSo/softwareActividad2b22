import { useState, useEffect } from "react";
const ReportPage = () => {
  const [estudiantesPorCurso, setEstudiantesPorCurso] = useState({});

  const loadData = async () => {
    try {
      const response = await fetch(`/api/estudiantes`);
      if (!response.ok) {
        throw new Error("Error al obtener estudiantes desde la API");
      }
      const estudiantes = await response.json();
      setEstudiantesPorCurso(estudiantes);
    } catch (error) {
      console.error(error);
      setEstudiantesPorCurso([]);
    }
  };
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(estudiantesPorCurso);

  return (
    <div className="bg-blue-100">
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">
        Reporte de Desempeño Académico
      </h1>

      {estudiantesPorCurso.length > 0 ? (
        estudiantesPorCurso.map((estudiante) => (
          <div
            key={estudiante.id}
            className="bg-white p-6 shadow-md rounded-lg mb-6 w-2/4"
          >
            <h2 className="text-xl font-semibold">{estudiante.nombre}</h2>
            <p>Correo: {estudiante.correo_electronico}</p>
            <p>Curso: {estudiante.curso}</p>
            <p>Calificación: {estudiante.calificacion}</p>
          </div>
        ))
      ) : (
        <p>No hay datos de estudiantes disponibles.</p>
      )}
    </div>
    </div>
  );
};

export default ReportPage;
