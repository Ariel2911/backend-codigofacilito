const express = require("express");

let SessionsControllers = require("../controllers/sessions");

let router = express.Router();

router.route("/sessions")
  .get(SessionsControllers.new)
  .post(SessionsControllers.create)
  .delete(SessionsControllers.destroy)

module.exports = router
