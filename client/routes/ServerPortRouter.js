
const express = require('express');
const app = express();
const ServerPortRouter = express.Router();

const ServerPort = require('../models/ServerPort');
const bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(require('connect').bodyParser());
ServerPortRouter.route('/add').post(function (req, res) {
  const serverport = new ServerPort(req.body);
  
  console.log(req)
  serverport.save()
    .then(serverport => {
        res.json("aded item");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

ServerPortRouter.route('/').get(function (req, res) {
    ServerPort.find(function (err, serverports){
    if(err){
      console.log(err);
    }
    else {
      res.json(serverports);
    }
  });
});

module.exports = ServerPortRouter;
