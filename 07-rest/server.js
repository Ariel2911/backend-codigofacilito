const express = require("express");
const sqlite3 = require("sqlite3");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");
const methodOverride = require("method-override")

const app = express();

const tasksRouter = require("./routes/tasks_router")

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.set("view engine", "pug");

app.use(tasksRouter)


app.listen(3000, () => console.log("servidor corriendo en el puerto 3000"))
