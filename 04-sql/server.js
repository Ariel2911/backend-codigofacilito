const express = require("express");
const sqlite3 = require("sqlite3");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

// const db = new sqlite3.Database(":memory") / :memory se usa para almasenar los datos en memoria y no en un archivo

let db = new sqlite3.Database("proyecto-backend");

// db.run("CREATE TABLE task(id int AUTO_INCREMENT, description varchar(255))");

// db.close

app.post("/pendientes", (req, res) => {

  const value = req.body.description

  db.run(`INSERT INTO task(description) VALUES(?)`, value);

  res.send("Inserción finalizada" );

});

app.listen(3000, () => {
  console.log("sercidor corriendo...")
});

process.on("SIGINT", () => {
  console.log("Adios");
  db.close();
  process.exit();
} )
