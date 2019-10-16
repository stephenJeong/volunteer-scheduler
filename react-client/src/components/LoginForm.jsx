import React from 'react';
import axios from 'axios';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      member: {
        organization: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        memberRole: '',
        memberType: ''
      }
    };
  }

  render() {
    return (
      <form>
          <label>
            Organization:
            <input type="text" name="organization" />
          </label>
          <label>
            First Name:
            <input type="text" name="firstName" />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" />
          </label>
          <label>
            Email:
            <input type="text" name="email" />
          </label>
          <label>
            Phone:
            <input type="text" name="phone" />
          </label>
          <label>
            Member Role:
            <input type="text" name="memberRole" />
          </label>
          <label>
            Member Type:
            <input type="text" name="memberType" />
          </label>
          <input type="submit" value="Login" />
        </form>
    );
  }
}

export default LoginForm;