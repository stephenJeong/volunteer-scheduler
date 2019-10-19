import React from 'react';
import Calendar from './Calendar.jsx';

const LoginView = (props) => (
  <div>
    <h1>Your Volunteers' Schedule</h1>
    <div className="loginBtns">
      <button>Admin View</button>
      <button id="memberViewBtn">Member View</button>
    </div>
    <div>
      <Calendar schedule={props.schedule} />
    </div>
  </div>
);

export default LoginView;