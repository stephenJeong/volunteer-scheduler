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
      adminView: false,
      memberView: false,
      allMembers: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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

  postData() {
    axios.post(`/api/member/${this.state.member.email}`, this.state.member)
      .then((res) => {
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

  getPageView() {
    let { loggedIn, adminView, memberView } = this.state;

    if (loggedIn && !adminView && !memberView) {
      return <LoginView allMembers={this.state.allMembers} />
    } else if (adminView) {
      return <AdminView />
    } else if (memberView) {
      return <MemberView />
    } else {
      return <LoginForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
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