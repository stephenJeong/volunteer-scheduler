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

  for (let i = 0; i < sundays.length; i++) {
    console.log(`***sundays - ${i}`, sundays[i].date);
    for (let x = 0; x < members.length; x++) {
      // check if the volunteers array for this date has < 5 people
      if (sundays[i].volunteers.length < 5) {
        // check if member has a date conflict with current date
        if (members[x].dateConflicts[0] !== sundays[i].date) {
          // If they don't, then add them to the volunteers arrayof the object
          sundays[i].volunteers.push(members[x].firstName + " " + members[x].lastName)
          // also add the date to members own data
          members[x].datesScheduled = sundays[i].date
        }
      } else if (sundays[i].volunteers.length === 5) {
        // if they have >= 5, break loop
        break;
      }
    }
  }

  return sundays;
}

module.exports.formatToWeeks = formatToWeeks;