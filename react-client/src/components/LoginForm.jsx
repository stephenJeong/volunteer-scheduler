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

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   axios.post(`/api/member/${this.state.email}`, this.state.member)
  //     .then((res) => {
  //       console.log('response from posting form to db:', res);
  //     })
  //     .catch((err) => {
  //       console.log('error while posting form to db:', err);
  //     });
  // }

  // handleChange(e) {
  //   let { value, name } = e.target;
  //   this.setState({
  //     [name]: value
  //   });
  // }

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