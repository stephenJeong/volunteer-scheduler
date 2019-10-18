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

  for (let i = 0; i < sundays.length; i++) {
    // use this function so that you don't always start with the same members
    let memberList = newMemberSort(members, lastScheduled);
    for (let x = 0; x < memberList.length; x++) {
      // check if the volunteers array for this date === 5 people
      if (sundays[i].volunteers.length === 5) {
        // if they have >= 5, break loop
        lastScheduled = x;
        break;
      } else if (sundays[i].volunteers.length < 5) {
        // check if member has a date conflict with current date
        let dConflict = () => {
          if (memberList[x].dateConflicts.length > 0) {
            return memberList[x].dateConflicts[0];
          }
        }
        if (dConflict !== sundays[i].date) {
          // If they don't, then add them to the volunteers arrayof the object
          sundays[i].volunteers.push(memberList[x].firstName + " " + memberList[x].lastName)
          // also add the date to members own data
          memberList[x].datesScheduled = sundays[i].date
        }
      }
    }
  }

  return sundays;
}

module.exports.formatToWeeks = formatToWeeks;