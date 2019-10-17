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
        memberType: '',
        dateConflicts: '',
        datesScheduled: ''
      },
      loggedIn: false,
      adminView: false,
      memberView: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // componentDidMount() {

  // }

  getData() {
    axios.get('/api/schedule')
  }

  postData() {
    console.log('this.state.member', this.state.member);
    axios.post(`/api/member/${this.state.member.email}`, this.state.member)
      .then((res) => {
        console.log('response from posting form to db:', res);
        this.setState({ loggedIn: true });
      })
      .catch((err) => {
        console.log('error while posting form to db:', err);
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.postData();
  }

  handleChange(e) {
    let { value, name } = e.target;
    this.setState(prevState => {
      let member = Object.assign({}, prevState.member);
      member[name] = value;
      return { member };
    })
  }

  // getPageView() {
  //   let state = this.state;

  //   if (state.loggedIn && !state.adminView && !state.memberView) {
  //     return // add new component here;
  //   } else if (state.adminView) {
  //     return // add new component here;
  //   } else if (state.memberView) {
  //     return // add new component here;
  //   } else {
  //     return <LoginForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
  //   }
  // }

  render () {
    return (
      <div>
        <LoginForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));