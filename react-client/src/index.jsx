import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Calendar from './components/Calendar.jsx';
import LoginForm from './components/LoginForm.jsx';
import LoginView from './components/LoginView.jsx';
import AdminView from './components/AdminView.jsx';
import MemberView from './components/MemberView.jsx';


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
      addMember: false,
      view: 'home',
      allMembers: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getAllData() {
    axios.get('/api/schedule')
      .then((res) => {
        this.setState({ allMembers: res.data });
      })
      .catch((err) => {
        console.log('error while getting all data from db', err);
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post(`/api/member/${this.state.member.email}`, this.state.member)
      .then((res) => {
        this.setState({
          loggedIn: true,
          view: 'admin'
        });
      })
      .catch((err) => {
        console.log('error while posting form to db:', err);
      });
  }

  handleNext(e) {
    e.preventDefault();
    axios.post(`/api/member/${this.state.member.email}`, this.state.member)
      .then((res) => {
        this.setState({
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
          }
        });
        console.log('added member to db');
        this.getAllData();
      })
      .catch((err) => {
        console.log('error while posting form to db:', err);
      });
  }

  handleChange(e) {
    let { value, name } = e.target;
    this.setState(prevState => {
      let member = Object.assign({}, prevState.member);
      member[name] = value;
      return { member };
    })
  }

  getPageView() {
    let view = this.state.view;

    if (view === 'admin') {
      return <LoginView allMembers={this.state.allMembers} />
    } else if (view === 'member') {
      return <MemberView />
    } else {
      return <LoginForm addMember={this.state.addMember} allMembers={this.state.allMembers} memberKeys={this.state.member} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleNext={this.handleNext} />
    }
  }

  componentDidMount() {
    this.getAllData();
  }

  render () {
    return (
      <div>
        {this.getPageView()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));