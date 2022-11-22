const Task = require("../models").task;

// console.log(Task)

module.exports = {
  create: function(req, res) {
    Task.create({
      description: req.body.description
    }).then(result=>{
      res.json(result);
    }).catch(err=> {
      console.log(err);
      res.json(err);
    })
  },
  new: function(req,res){
    res.render("tasks/new");
    // res.send("tasks/new");
  }
}
