import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Calendar from './components/Calendar.jsx';
import LoginForm from './components/LoginForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {

  }

  getData() {
    axios.get('/api/schedule')
  }

  postData() {
    axios.post('/api/<userEmail>')
  }

  render () {
    return (<div>
      <h1>Schedule Your Volunteers</h1>
      <LoginForm />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));