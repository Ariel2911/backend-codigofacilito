const User = require("../models").User;

module.exports = function(req, res, next){

  if(!req.session.userId) return next();
  
  User.findOne({where: {id: req.session.userId}})
    .then((data) => {
      req.user = data;
      next()
    })
}