import connection from "@/lib/db/db";

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "GET":
        return await getEstudiantesInscritosEnCurso(req, res);
      case "POST":
        return await saveEstudiantes(req, res);
      default:
        throw new Error("Metodo invalido");
    }
  } catch (error) {
    error;
    return res.status(500).json({
      message: new Error(error).message,
      success: false,
    });
  }
}

const getEstudiantesInscritosEnCurso = async (req, res) => {
  connection.query("SELECT * FROM estudiantes ORDER BY curso", (error, results) => {
    if (error) {
      console.error("Error al ejecutar la consulta:", error);
      res
        .status(500)
        .json({ error: "Error al obtener usuarios de la base de datos." });
    } else {
      res.status(200).json(results);
    }
  });
};

const saveEstudiantes = async (req, res) => {
  const { name, password, email, curso } = req.body;

  try {
    connection.query(
      "INSERT INTO estudiantes (nombre, correo_electronico, contrasena, curso) VALUES (?, ?, ?, ?)",
      [name, email, password, curso],
      function (err, result) {
        if (err) {
          console.error("Error al guardar el estudiante:", err);
          return res.status(500).json({
            message: "Error al guardar el estudiante en la base de datos.",
            success: false,
          });
        } else {
          const id = result.insertId;
          return res.status(200).json({
            id,
            nombre: name,
            correo_electronico: email,
            contrasena: password,
            curso,
            success: true,
          });
        }
      }
    );
  } catch (error) {
    console.error("Error al guardar el estudiante:", error);
    return res.status(500).json({
      message: "Error al guardar el estudiante en la base de datos.",
      success: false,
    });
  }
};
