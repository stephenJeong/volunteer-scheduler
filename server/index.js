const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mongo');
const PORT = 3000;
const utils = require('../utils/utils.js');
// const axios = require('axios');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/members', (req, res) => {
  db.selectAll((err, data) => {
    if(err) {
      console.log('error while getting members data:', err);
      res.sendStatus(500);
    } else {
      res.json(data);
      // console.log(JSON.stringify(data));
    }
  });
});

app.get('/api/schedule', (req, res) => {
  db.selectAll((err, data) => {
    if(err) {
      console.log('error while getting members data:', err);
      res.sendStatus(500);
    } else {
      console.log('utils ****', utils.formatToWeeks(data));
      // res.send(utils.formatToWeeks(JSON.stringify(data)));

      // send res.send with results of the above so it should be:


    }
  });
});

app.get('/api/schedule/:memberEmail', (req, res) => {
  db.selectAll((err, data) => {
    if(err) {
      console.log('error while getting member data:', err);
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/api/member/:memberEmail', (req, res) => {
  console.log('got to post in server');
  // console.log('req.body', req.body);

  // add data to db
  db.saveOne(req.body, (err, results) => {
    if (err) {
      throw err;
    } else {
      res.sendStatus(201);
    }
  });
})

app.put('/api/member/:memberEmail', (req, res) => {
  console.log('got to put in server');

  // update data in db

  // if successful, send this status
  res.sendStatus(200);
})

app.delete('/api/:memberEmail', (req, res) => {
  console.log('got to delete in server');

  // if successful, send this status and also send the email of the person that was deleted as confirmation
  res.sendStatus(200);
})


app.listen(PORT, function() {
  console.log('listening on port 3000!');
});