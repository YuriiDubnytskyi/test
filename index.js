const express = require('express');
const path = require('path');

const app = express();

const Schema = mongoose.Schema;

const ServerPortRouter = express.Router();
const mongoose = require('mongoose');

const ServerPort = new Schema({
  name: {
    type: String
  },
  port: {
      type: Number
  }
},{
    collection: 'servers'
});

mongoose.connect('mongodb+srv://yuriy:Wdj_7yex6cE5cjp@cluster0-odkqs.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true}).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database' +err)
});



ServerPortRouter.route('/add').post(function (req, res) {
  const serverport = new ServerPort(req.body);
  serverport.save()
    .then(serverport => {
        res.json('Server added successfully');
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

app.use('/serverport', ServerPortRouter);
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'









// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});






const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);
