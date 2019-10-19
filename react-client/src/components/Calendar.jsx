import React from 'react';
import CalendarMonth from './CalendarMonth.jsx';

const Calendar = (props) => {
  let months = [];
  let monthLoop = 0;
  let firstMonth = [];
  let secondMonth = [];
  let thirdMonth = [];
  props.schedule.forEach((week) => {
    if (!months.includes(week.month)) {
      monthLoop++;
      months.push(week.month);
    }
    if (monthLoop === 1) {
      firstMonth.push(week);
    } else if (monthLoop === 2) {
      secondMonth.push(week);
    } else if (monthLoop === 3) {
      thirdMonth.push(week);
    }
  })

  return (
  <div>
    <div>
      <h2>{months[0]}</h2>
      <CalendarMonth month={firstMonth} />
    </div>
    <div>
      <h2>{months[1]}</h2>
      <CalendarMonth month={secondMonth} />
    </div>
    <div>
      <h2>{months[2]}</h2>
      <CalendarMonth month={thirdMonth} />
    </div>
  </div>
  )
};

export default Calendar;