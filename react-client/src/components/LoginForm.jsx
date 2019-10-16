import React from 'react';
import axios from 'axios';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <form className="loginForm" onSubmit={this.props.handleSubmit}>
          <label>
            Organization:
            <input type="text" name="organization" onChange={this.props.handleChange} />
          </label>
          <label>
            First Name:
            <input type="text" name="firstName" onChange={this.props.handleChange} />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" onChange={this.props.handleChange} />
          </label>
          <label>
            Email:
            <input type="text" name="email" onChange={this.props.handleChange} />
          </label>
          <label>
            Phone:
            <input type="text" name="phone" onChange={this.props.handleChange} />
          </label>
          <label>
            Member Role:
          <select>
            <option value=""></option>
            <option value="admin">Admin</option>
            <option value="member">Member</option>
          </select>
          </label>
          <label>
            Member Type:
            <select>
            <option value=""></option>
            <option value="guitarist">Guitarist</option>
            <option value="vocalist">Vocalist</option>
            <option value="bassist">Bassist</option>
            <option value="drummer">Drummer</option>
            <option value="pianist">Pianist</option>
          </select>
          </label>
          <input type="submit" value="Login" className="button" />
        </form>
    );
  }
}

export default LoginForm;