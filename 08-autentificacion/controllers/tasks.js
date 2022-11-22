
const Task = require("../models").Task;

module.exports = {

  index: function(req, res){
    
    Task.findAll().then((data) => {
      // res.json(data)
      res.render("tasks/index",{data});
      // console.log(data)
    })

  },

  show: function(req, res){
    
   Task.findOne({where: {id: req.params.id}}).then((data) => {
    // res.json(data)
    res.render("tasks/show",{task: data})
   })
    // res.send(await Task.findAll({where: {id: req.params.id}}))

  },

  edit: function(req,res){

    Task.findOne({where: {id: req.params.id}}).then((data) => {
      res.render("tasks/edit",{task: data})
     })

  },

  destroy: function(req,res){

    Task.destroy({where: {id: req.params.id}}).then((contadorElementosEliminados) => {
      
      res.redirect("/tasks")
     })

  },


  create: function(req, res){

    Task.create({
      description: req.body.description
    }).then(result => {
      res.json(result);
    }).catch(err=> {
      console.log(err);
      res.json(err)
    })

  },

  update: function(req, res){

    Task.update({description: req.body.description},{
      where: {
        id: req.params.id
      }
    }).then(function(response){
      // res.json(response)
      res.redirect("/tasks/"+req.params.id)
    })

  },

  new: function(req,res){
    res.render("tasks/new")
  }

}