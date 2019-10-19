import React from 'react';

const CalendarMonth = (props) => {
  return (
  <div>
    <table className="months">
        <tbody>
            {props.month.map((week) => (
              <tr key={week.date}>
                <td className="date">{week.date}</td>
                <td>{week.volunteers[0]}</td>
                <td>{week.volunteers[1]}</td>
                <td>{week.volunteers[2]}</td>
                <td>{week.volunteers[3]}</td>
                <td>{week.volunteers[4]}</td>
              </tr>
            ))}
        </tbody>
      </table>
  </div>
  );
}

export default CalendarMonth;