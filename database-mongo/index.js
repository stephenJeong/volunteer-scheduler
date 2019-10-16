const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/scheduler');

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

const selectAll = (callback) => {
  Member.find({}, function(err, members) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, members);
    }
  });
};

// post to db
const saveOne = (data) => {
  // let newMember = new Member({ data });
  // newMember.save((err, member) => {
  //   if (err) {
  //     console.log('error while saving to db', err);
  //   } else {
  //     console.log(member.email + ' saved to the db');
  //   }
  // });

  Member.findOneAndUpdate(
    { email: data.email },
    data,
    { upsert: true},
    (err, results) => {
      if (err) {
        console.log('error while saving to db', err);
      } else {
        console.log(member.email + ' saved to the db');
      }
    });
};

module.exports.selectAll = selectAll;
module.exports.saveOne = saveOne;