import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Calendar from './components/Calendar.jsx';
import LoginForm from './components/LoginForm.jsx';

class App extends React.Component {
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

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {

  }

  getData() {
    axios.get('/api/schedule')
  }

  postData() {
    axios.post('/api/<userEmail>')
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post(`/api/member/${this.state.member.email}`, this.state.member)
      .then((res) => {
        console.log('response from posting form to db:', res);
      })
      .catch((err) => {
        console.log('error while posting form to db:', err);
      });
  }

  handleChange(e) {
    let { value, name } = e.target;
    this.setState(prevState => {
      let member = Object.assign({}, prevState.member);  // creating copy of state variable jasper
      member[name] = value;                     // update the name property, assign a new value
      return { member };                                 // return new object jasper object
    })
  }

  render () {
    return (
      <div>
        <h1>Schedule Your Volunteers</h1>
        <LoginForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));