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
      <div>
      <h1>Schedule Your Volunteers</h1>
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
          <select name="memberRole" onChange={this.props.handleChange}>
            <option value=""></option>
            <option value="Admin">Admin</option>
            <option value="Member">Member</option>
          </select>
          </label>
          <label>
            Member Type:
            <select name="memberType" onChange={this.props.handleChange}>
            <option value=""></option>
            <option value="Guitarist">Guitarist</option>
            <option value="Vocalist">Vocalist</option>
            <option value="Bassist">Bassist</option>
            <option value="Drummer">Drummer</option>
            <option value="Pianist">Pianist</option>
          </select>
          </label>
          <input type="submit" value="Login" className="button" />
        </form>
        </div>
    );
  }
}

export default LoginForm;