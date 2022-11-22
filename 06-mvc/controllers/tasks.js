const Task = require("../models").Task;

module.exports = {
  home: function(req, res){

    Task.findAll().then((data) => {

      res.render("tasks/index",{data});
      
    })

  }
}