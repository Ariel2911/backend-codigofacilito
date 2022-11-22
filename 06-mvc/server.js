const express = require("express");
const sqlite3 = require("sqlite3");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");

const app = express();

const tasks = require("./controllers/tasks")

app.use(bodyParser.urlencoded({extended: true}))

// const sequelize = new Sequelize("proyecto-backend",null,null,{
//   dialect: "sqlite",
//   storage: "./proyecto-backend"
// });

app.set("view engine", "pug");

app.get("/tasks", tasks.home);

app.post("/pendientes", (req,res) => {
  // db.run(`INSERT INTO tasks(description) VALUES(?)`,req.body.description)//inyección dinamica sanitizada
  res.send("inserción finalizada")
})


app.listen(3000, () => console.log("servidor corriendo en el puerto 3000"))
