import connection from "@/lib/db/db";

export default function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).end(); // Método no permitido
    }
  
    const { email, password } = req.body;

  connection.query(
    'SELECT * FROM estudiantes WHERE correo_electronico = ? AND contrasena = ?',
    [email, password],
    (err, rows) => {
      if (err) {
        console.error('Error al realizar la consulta:', err);
        return res.status(500).json({ message: 'Error al iniciar sesión.', success: false });
      }

      if (rows.length === 1) {
        // Credenciales válidas
        const curso = rows[0].curso; // Obtenemos el nombre del curso al que se inscribió el estudiante
        return res.status(200).json({ message: 'Inicio de sesión exitoso.', success: true, curso });
      } else {
        // Credenciales inválidas
        return res.status(401).json({ message: 'Credenciales inválidas.', success: false });
      }
    }
  );
}