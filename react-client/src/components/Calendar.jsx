import React from 'react';
import CalendarMonth from './CalendarMonth.jsx';

const Calendar = (props) => {
  console.log('props.allMembers', props.allMembers);
  // send array with dates to calendar month weeks
  // is there a way to dynamically set those months from the data we get with props?
  return (
  <div>
    <div>
      <h2>October</h2>
      <CalendarMonth weeks={props} />
    </div>
    <div>
      <h2>November</h2>
      <CalendarMonth weeks={props} />
    </div>
    <div>
      <h2>December</h2>
      <CalendarMonth weeks={props} />
    </div>
    {/* {props.allMembers.map(data => (
      <CalendarMonth member={data} key={data.email} />
    ))} */}
  </div>
  )
};

export default Calendar;