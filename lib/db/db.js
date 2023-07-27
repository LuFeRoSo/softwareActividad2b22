import mysql from 'mysql';


// Configuramos la conexión a la base de datos
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gestionEstu",
});

// Conectamos a la base de datos
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
  } else {
    console.log('Conexión exitosa a la base de datos MySQL.');
  }
});

// Exportamos la conexión para utilizarla en otros módulos
export default connection;