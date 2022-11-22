const express = require("express");
let TasksController = require("../controllers/tasks")

const router = express.Router();

router.route("/tasks").get(function(req, res) {
  res.send("Hola desde una subruta");
}).post(TasksController.create);

router.get("/tasks/new",TasksController.new)

module.exports = router;