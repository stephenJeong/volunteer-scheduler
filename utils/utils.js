const db = require('../database-mongo/index.js');

const formatToWeeks = (members) => {
  // console.log('members[0]', members[0]);
  // console.log('members.length', members.length);

  // get list of sundays for current month
  let sundays = [];
  let monthsWords = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
  };


  // loop to find sundays for current month + 2 months following
  for (let x = 0; x < 3; x++) {
    let date = new Date();
    // set month
    let currentDate = new Date(date.setMonth(date.getMonth()+x));
    let totalDaysMonth = new Date(currentDate.getMonth(), currentDate.getFullYear(), 0).getDate();
    // find all sundays for the month
    for (let i = 1; i < totalDaysMonth; i++) {
      let newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
      if (newDate.getDay() === 0) {
        let obj = { month: monthsWords[currentDate.getMonth()], date: '', volunteers: [] };
        obj.date = newDate.toISOString().substring(0,10);
        sundays.push(obj);
      }
    }
  }

  let lastScheduled = 0;
  let newMemberSort = (original, index) => {
    let og = original;
    let newStart = og.slice(index);
    let newEnd = og.slice(0, index)
    return newStart.concat(newEnd);
  };

  // use this function so that you don't always start with the same members
  let memberList = newMemberSort(members, lastScheduled);

  for (let i = 0; i < sundays.length; i++) {
    // check if member has a date conflict with current date
    let dConflict = (index) => {
      let conflicts = memberList[index].dateConflicts;
      if (conflicts.length > 0) {
        for (let y = 0; y < conflicts.length; y++) {
          if (conflicts[y] === sundays[i].date) {
            return true;
          }
        }
        return false;
      }
    };

    for (let z = 0; z < members.length; z++) {
      if (sundays[i].volunteers.length < 5) {
        if (!dConflict(z)) {
          // If they don't, then add them to the volunteers arrayof the object
          sundays[i].volunteers.push(memberList[z].firstName + " " + memberList[z].lastName)
          // also add the date to members own data
          memberList[z].datesScheduled = sundays[i].date;
          db.updateSchedule(memberList[z], (err, results) => {
            if (err) {
              throw err;
            } else {
              // console.log(`updated ${memberList[z].firstName}'s schedule`);
            }
          });
        }
      }

      // check if the volunteers array for this date === 5 people
      if (sundays[i].volunteers.length === 5) {
        // if they have = 5, break loop
        console.log('z', z);
        lastScheduled = ++z;
        console.log('lastScheduled', lastScheduled)


        memberList = newMemberSort(memberList, lastScheduled);
        break;
      }
    }
  }

  return sundays;
}

module.exports.formatToWeeks = formatToWeeks;