const express = require("express");
const sqlite3 = require("sqlite3");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");
const methodOverride = require("method-override");
const sessions = require("express-session");

const app = express();

const tasksRouter = require("./routes/tasks_router")
const registrationRouter = require("./routes/registrations_route")
const sessionsRouter = require("./routes/sessions_routes")

const findUserMiddleware = require("./middlewares/find_user")
const authUserMiddleware = require("./middlewares/auth_user")

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.set("view engine", "pug");

app.use(sessions({
  secret: ["123","1234"],
  saveUninitialized: false,
  resave: false
}))

app.use(findUserMiddleware)
app.use(authUserMiddleware)

app.use(tasksRouter)
app.use(registrationRouter)
app.use(sessionsRouter)

app.get("/", function(req,res){
  res.render("home", {user: req.user})
})


app.listen(3000, () => console.log("servidor corriendo en el puerto 3000"))

// email= arielBarrioss@hotmail.com
// password = rttrtrtr
