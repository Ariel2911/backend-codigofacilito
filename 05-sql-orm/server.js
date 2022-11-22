const express = require("express");
const sqlite3 = require("sqlite3");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");


const app = express();

app.use(bodyParser.urlencoded({extended: true}))

// Segundo argumento: nombre de usuario. terrcer argumento: contraseña
const sequelize = new Sequelize("proyecto-backend", null, null, {
  dialect: "sqlite",
  storage: "./proyecto-backend"
});

app.post("/pendientes", (req, res) => {

  const value = req.body.description

  // db.run(`INSERT INTO task(description) VALUES(?)`, value);

  res.send("Inserción finalizada" );

});

app.listen(3000, () => {
  console.log("sercidor corriendo...")
});

// process.on("SIGINT", () => {
//   console.log("Adios");
//   db.close();
//   process.exit();
// } )
