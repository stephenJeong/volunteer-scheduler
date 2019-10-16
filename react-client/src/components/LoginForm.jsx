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
            <input type="text" name="memberRole" onChange={this.props.handleChange} />
          </label>
          <label>
            Member Type:
            <input type="text" name="memberType" onChange={this.props.handleChange} />
          </label>
          <input type="submit" value="Login" className="button" />
        </form>
    );
  }
}

export default LoginForm;