const express = require("express");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");
const socketio = require("socket.io");


const app = express();

const tasksRouter = require("./routes/tasks_router");

app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "pug");

app.use(tasksRouter);


let server = app.listen(3000, () => {
  console.log("sercidor corriendo...")
});

let io = socketio(server);

let userCount = 0;

io.on("connection", function(socket){

  userCount++;

  io.emit("count_updated", {count: userCount});

  socket.on("disconnect", function(){
    userCount--;
    io.emit("count_updated", {count: userCount})
  })
})