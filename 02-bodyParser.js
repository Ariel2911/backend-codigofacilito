const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.post("/", (req, res) => {
  res.send(`Hola ${req.body.name}`)
})

app.listen(3000, () => {
  console.log("servidor escuchando en el puerto 3000")
} )