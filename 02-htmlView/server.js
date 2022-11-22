const express = require("express");

const app = express();

app.set('view engine', 'ejs');

// el "etag" se usa para almacenar una copia de los archivos en cache.
// Cache-control: public, max-age=0. Con maxAge podemos espesificar cuanto tiempo tendra validas los archivos almacanados en cache. Dicho valor se espresa en milisegundos, el valor maxsimo es 1 año

app.use("/assets",express.static("assets",{
  etag: false,
  maxAge: 10
}));

app.get("/", (req, res) => {
  res.render("index")
})

app.listen(3000, () => {
  console.log("servidor escuchando en el puerto 3000")
})