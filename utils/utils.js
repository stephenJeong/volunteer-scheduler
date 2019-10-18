const formatToWeeks = (data) => {
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
    // loop through possible dates this month
    for (let x = 0; x < sundaysThisMonth.length; x++) {
    // Assign to specific days unless that day is in their datesconflicts array

    }
  }
  // while looping/ also create new object to store memberTypes where keys will be memberType and values will be array of people

}

module.exports.formatToWeeks = formatToWeeks;