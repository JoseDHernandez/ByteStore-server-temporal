const path = require("path");
const express = require("express");
// --- Servidor Express en 8001 ---
const app = express();

// Servir imágenes desde la carpeta "images"
app.use("/images", express.static(path.join(__dirname, "images")));

app.listen(8001, () => {
  console.log("Servidor Express corriendo en http://localhost:8001");
});
