const express = require("express");

const app = express()

app.get("/saludo", (req, res) => {
  const name = req.query.name
  res.send(`hola ${name}`)
})

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000")
})