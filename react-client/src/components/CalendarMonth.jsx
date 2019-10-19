import React from 'react';

const CalendarMonth = (props) => {
  // find out if this month has 4 or 5 weeks and create columns in table accordingly
  // create script to update this variable to 4 or 5
  console.log('props.month', props.month);
  let createTable = () => {
    if (props.month.length === 4) {
      return <table className="months">
        <tbody>
          <tr>
            <td className="date">date 1</td>
            <td className="date">date 2</td>
            <td className="date">date 3</td>
            <td className="date">date 4</td>
          </tr>
          <tr>
            <td>personA</td>
            <td>personB</td>
            <td>personC</td>
            <td>personD</td>
          </tr>
          <tr>
            <td>personA</td>
            <td>personB</td>
            <td>personC</td>
            <td>personD</td>
          </tr>
          <tr>
            <td>personA</td>
            <td>personB</td>
            <td>personC</td>
            <td>personD</td>
          </tr>
          <tr>
            <td>personA</td>
            <td>personB</td>
            <td>personC</td>
            <td>personD</td>
          </tr>
          <tr>
            <td>personA</td>
            <td>personB</td>
            <td>personC</td>
            <td>personD</td>
          </tr>
        </tbody>
      </table>
    } else if (props.month.length === 5) {
      return <table className="months">
        <tbody>
          <tr>
            <td className="date">date 1</td>
            <td className="date">date 2</td>
            <td className="date">date 3</td>
            <td className="date">date 4</td>
            <td className="date">date 5</td>
          </tr>
          <tr>
            <td>personA</td>
            <td>personB</td>
            <td>personC</td>
            <td>personD</td>
            <td>personE</td>
          </tr>
          <tr>
            <td>personA</td>
            <td>personB</td>
            <td>personC</td>
            <td>personD</td>
            <td>personE</td>
          </tr>
          <tr>
            <td>personA</td>
            <td>personB</td>
            <td>personC</td>
            <td>personD</td>
            <td>personE</td>
          </tr>
          <tr>
            <td>personA</td>
            <td>personB</td>
            <td>personC</td>
            <td>personD</td>
            <td>personE</td>
          </tr>
          <tr>
            <td>personA</td>
            <td>personB</td>
            <td>personC</td>
            <td>personD</td>
            <td>personE</td>
          </tr>
        </tbody>
      </table>
    }
  }

  return (
  <div>
    {createTable()}
  </div>
  );
}

export default CalendarMonth;