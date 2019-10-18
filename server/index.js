const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mongo');
const PORT = 3000;
// const axios = require('axios');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/schedule', (req, res) => {
  db.selectAll((err, data) => {
    if(err) {
      console.log('error while getting organization schedule:', err);
      res.sendStatus(500);
    } else {
      // res.json(data);
      // JSON.stringify(data) returns array of objects
      console.log('JSON.stringify(data)', JSON.stringify(data));
      let originalData = JSON.stringify(data);

      // create code to rearrange data by date
      // get list of sundays for current month
      let currentDate = new Date();
      let totalDaysMonth = new Date(currentDate.getMonth(), currentDate.getFullYear(), 0).getDate();
      let sundaysThisMonth = [];

      for (let i = 1; i < totalDaysMonth; i++) {
        let newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
        if (newDate.getDay() === 0) {
          let obj = {};
          obj.date = newDate.toISOString().substring(0,10);
          sundaysThisMonth.push(obj);
        }
      }

      // loop through array and check dates scheduled
      for (let i = 0; i < originalData.length; i++) {
        /*
        [
        {"_id":"5da7b0c3d281b86892455b11","email":"sjeong@gmail.com","__v":0,"firstName":"stephen","lastName":"jeong","memberRole":"Admin","memberType":"Vocalist","organization":"org","phone":"12345","datesScheduled":[""],"dateConflicts":[""]},
        {"_id":"5da800aad281b86892455f31","email":"3","__v":0,"firstName":"2","lastName":"","memberRole":"Admin","memberType":"Vocalist","organization":"1","phone":"4","datesScheduled":[""],"dateConflicts":[""]},
        {"_id":"5da801e0d281b86892455f77","email":"1","__v":0,"firstName":"1","lastName":"1","memberRole":"","memberType":"","organization":"1","phone":"1","datesScheduled":[""],"dateConflicts":[""]}
        ]
        */
       // loop through possible dates this month
       for (let x = 0; x < sundaysThisMonth.length; x++) {
        // Assign to specific days unless that day is in their datesconflicts array

       }
      }
      // while looping/ also create new object to store memberTypes where keys will be memberType and values will be array of people

      // res.send reformatted data to client

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