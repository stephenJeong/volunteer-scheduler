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
      allMembers: [],
      schedule: []
    };

    this.handleCreate = this.handleCreate.bind(this);
    this.handleAddMore = this.handleAddMore.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdateMember = this.handleUpdateMember.bind(this);
    this.handleUpdateMemberSelect = this.handleUpdateMemberSelect.bind(this);
  }

  getMembersData() {
    axios.get('/api/members')
      .then((res) => {
        this.setState({ allMembers: res.data });
      })
      .catch((err) => {
        console.log('error while getting all data from db', err);
      });
  }

  getSchedule() {
    axios.get('/api/schedule')
      .then((res) => {
        this.setState({ schedule: res.data });
      })
      .catch((err) => {
        console.log('error while getting schedule data from db', err);
      });
  }

  handleCreate(e) {
    e.preventDefault();
    axios.post(`/api/member/${this.state.member.email}`, this.state.member)
      .then((res) => {
        this.setState({
          loggedIn: true,
          view: 'admin'
        });
        this.getSchedule();
      })
      .catch((err) => {
        console.log('error while posting form to db:', err);
      });
  }

  handleAddMore(e) {
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
        this.getMembersData();
      })
      .catch((err) => {
        console.log('error while posting form to db:', err);
      });
  }

  handleUpdate(e) {
    e.preventDefault();
    axios.put(`/api/member/${this.state.member.email}`, this.state.member)
      .then((res) => {
        this.setState({
          loggedIn: true,
          view: 'admin'
        });
        this.getSchedule();
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

  handleUpdateMember(e) {
    e.preventDefault();
    this.setState({ view: 'updateMember' })
  }

  handleUpdateMemberSelect(newData) {
    this.setState({ member: newData });
  }

  componentDidMount() {
    this.getMembersData();
  }

  getPageView() {
    let view = this.state.view;

    if (view === 'admin') {
      return <LoginView schedule={this.state.schedule} handleUpdateMember={this.handleUpdateMember} handleCreate={this.handleCreate}/>
    } else if (view === 'updateMember') {
      return <MemberView memberKeys={this.state.member} allMembers={this.state.allMembers} handleChange={this.handleChange} handleUpdate={this.handleUpdate} handleUpdateMemberSelect={this.handleUpdateMemberSelect} />
    } else {
      return <LoginForm addMember={this.state.addMember} allMembers={this.state.allMembers} memberKeys={this.state.member} handleChange={this.handleChange} handleCreate={this.handleCreate} handleAddMore={this.handleAddMore} />
    }
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