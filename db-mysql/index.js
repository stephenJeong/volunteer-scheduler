const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'stephen',
  password: 'password',
  database: 'volunteers'
});

connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('mySQL connected successfully');
  }
});

// selectAll
// saveOne
// update
// delete

