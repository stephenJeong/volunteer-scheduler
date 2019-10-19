import React from 'react';
import Calendar from './Calendar.jsx';

const LoginView = (props) => (
  <div>
    <h1>Your Volunteers' Schedule</h1>
    <div className="loginBtns">
      <button onClick={props.handleHome}>Add More Members</button>
      <button id="memberViewBtn" onClick={props.handleUpdateMember}>Update Member</button>
    </div>
    <div>
      <Calendar schedule={props.schedule} />
    </div>
  </div>
);

export default LoginView;