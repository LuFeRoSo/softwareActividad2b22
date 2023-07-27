const getCourseStatusColor = (status) => {
    switch (status) {
      case 'Completado':
        return 'bg-green-500';
      case 'En Progreso':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };
  
  export default getCourseStatusColor;