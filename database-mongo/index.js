const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

const memberSchema = mongoose.Schema({
  orgName: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  memberRole: String,
  memberType: String,
  dateConflicts: [String],
  dateScheduled: [String]
});

const Member = mongoose.model('Member', memberSchema);

const selectAll = function(callback) {
  Member.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

// post to db

module.exports.selectAll = selectAll;