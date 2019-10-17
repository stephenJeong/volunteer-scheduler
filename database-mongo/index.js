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
  organization: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  memberRole: String,
  memberType: String,
  dateConflicts: [String],
  datesScheduled: [String]
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
        console.log('successfully saved to db');
        Member.count({}, (err, count) => {
          if (err) {
            throw err;
          } else {
            console.log(`there are now ${count} documents in the db`);
          }
        })
      }
    });


};


module.exports.selectAll = selectAll;
module.exports.saveOne = saveOne;