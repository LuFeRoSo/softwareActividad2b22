import connection from "@/lib/db/db";

export default function handler(req, res) {
  connection.query('SELECT * FROM estudiantes', (error, results) => {
    if (error) {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).json({ error: 'Error al obtener usuarios de la base de datos.' });
    } else {
      res.status(200).json(results);
    }
  });
}
