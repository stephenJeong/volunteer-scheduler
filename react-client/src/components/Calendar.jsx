import React from 'react';
import CalendarWeek from './CalendarWeek.jsx';

const Calendar = (props) => {
  console.log('props.allMembers', props.allMembers);
  return (
  <div>
    <h4> Calendar Component </h4>
    {props.allMembers.map(data => (
      <CalendarWeek member={data} key={data.email} />
    ))}
  </div>
  )
};

export default Calendar;