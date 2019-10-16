const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mongo');
const PORT = 3000;
const axios = require('axios');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/api/schedule', (req, res) => {
  db.selectAll((err, data) => {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/api/member/:memberEmail', (req, res) => {
  console.log('got to post in server');
  // add data to mongo

  // send response
  res.sendStatus(201);
  res.send('saved to db');
})

app.listen(PORT, function() {
  console.log('listening on port 3000!');
});

