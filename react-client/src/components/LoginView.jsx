import React from 'react';
import Calendar from './Calendar.jsx';

const LoginView = (props) => (
  <div>
    <h1>Your Volunteers Schedule</h1>
    <div>
      <button>Admin View</button>
      <button id="memberViewBtn">Member View</button>
    </div>
    <div>
      <Calendar allMembers={props.allMembers} />
    </div>
  </div>
);

export default LoginView;