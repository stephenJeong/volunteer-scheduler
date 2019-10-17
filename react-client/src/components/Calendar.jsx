import React from 'react';
import CalendarWeek from './CalendarWeek.jsx';

const Calendar = (props) => (
  <div>
    <h4> Calendar Component </h4>
    {props.allMembers.map(data => (
      <CalendarWeek member={data} />
    ))}
  </div>
);

export default Calendar;