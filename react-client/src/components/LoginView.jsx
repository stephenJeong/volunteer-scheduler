import React from 'react';
import Calendar from './Calendar.jsx';

const LoginView = (props) => (
  <div>
    <h1>Your schedule **Delete this after finishing or change header to something else**</h1>
    <div>
      <button>Admin View</button>
      <button>Member View</button>
    </div>
    <div>
      <Calendar allMembers={props.allMembers} />
    </div>
  </div>
);

export default LoginView;