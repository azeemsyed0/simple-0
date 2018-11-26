const Credential = require('../models/credential');

exports.usersList = (req,res) => {
  Credential.findAll()
    .then(users => {  
      res.send(users);
    })
    .catch(() => console.log("Error"));
}

exports.createUser = (req,res) => {
  const data = {     
    "name": req.body.name,
    "email":req.body.email,
    "password":req.body.password
  };
  Credential.create({
    name: data.name,
    email: data.email, 
    password:data.password
  })
    .then(() => {
    res.status(201).json("New User Added!");
    })
    .catch((err) =>{
      res.status(400).send(err.parent.detail);
    });
}
  
  exports.getUserById = (req,res) => {
    Credential.findById(req.params.id)
     .then(user => {
        if(!user.length)
          return res.status(400).send("User with given ID doesn't exist!");
        res.send(user);
     })
     .catch((err) =>{
        res.status(400).send("User with given ID doesn't exist!");
     });
  }