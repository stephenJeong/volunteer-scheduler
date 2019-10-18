import React from 'react';
import CalendarMonth from './CalendarMonth.jsx';

const Calendar = (props) => {
  console.log('props.schedule', props.schedule);
  // is there a way to dynamically set those months from the data we get with props?
  let months = [];
  props.schedule.forEach((week) => {
    if (!months.includes(week.month)) {
      months.push(week.month);
    }
  })

  return (
  <div>
    <div>
      <h2>{months[0]}</h2>
      <CalendarMonth weeks={props} />
    </div>
    <div>
      <h2>{months[1]}</h2>
      <CalendarMonth weeks={props} />
    </div>
    <div>
      <h2>{months[2]}</h2>
      <CalendarMonth weeks={props} />
    </div>
    {/* {props.allMembers.map(data => (
      <CalendarMonth member={data} key={data.email} />
    ))} */}
  </div>
  )
};

export default Calendar;