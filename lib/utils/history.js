import React from "react";
import getCourseStatusColor from '../utils/courseStatusColor';
const CourseHistory = ({ courseHistory }) => {
  if (!courseHistory || courseHistory.length === 0) {
    return <p>No hay cursos completados todavía.</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">Cursos Completados</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courseHistory && courseHistory.length > 0 ? (
          courseHistory.map((course, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg">
              <div className="flex items-center mb-4">
                <div
                  className={`w-4 h-4 rounded-full mr-2 ${getCourseStatusColor(course.status)}`}
                ></div>
                <h2 className="text-xl font-semibold">{course.name}</h2>
              </div>
              <p className="text-gray-700">
                Descripción del curso y contenido...
              </p>
            </div>
          ))
        ) : (
          <p>No hay cursos completados todavía.</p>
        )}
      </div>
    </div>
  );
};

export default CourseHistory;
