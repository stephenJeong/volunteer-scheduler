import React from 'react';
import AddedMembers from './AddedMembers.jsx';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {organization, firstName, lastName, email, phone, dateConflicts} = this.props.memberKeys;
    return (
      <div>
      <h1>Schedule Your Volunteers</h1>
      <div>
        <form className="centerForm" onSubmit={this.props.handleSubmit}>
            <label>
              Organization:
              <input value={organization} type="text" name="organization" onChange={this.props.handleChange} />
            </label>
            <label>
              First Name:
              <input value={firstName} type="text" name="firstName" onChange={this.props.handleChange} />
            </label>
            <label>
              Last Name:
              <input value={lastName} type="text" name="lastName" onChange={this.props.handleChange} />
            </label>
            <label>
              Email:
              <input value={email} type="text" name="email" onChange={this.props.handleChange} />
            </label>
            <label>
              Phone:
              <input value={phone} type="text" name="phone" onChange={this.props.handleChange} />
            </label>
            <label>
              Unavailable Sunday:
              <input value={dateConflicts} type="date" name="dateConflicts" onChange={this.props.handleChange} />
            </label>
            {/* <label>
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
            </label> */}
            {/* <input type="submit" value="Login" className="button" /> */}
          </form>
          <div className="loginBtns">
            <button onClick={this.props.handleAddMore} className="formBtn">Add More Members</button>
            <button onClick={this.props.handleCreate} className="formBtn" id="finishBtn">Create Schedule</button>
          </div>
        </div>
        <div id="memberAddedTbl">
          <AddedMembers allMembers={this.props.allMembers} />
        </div>
      </div>
    );
  }
}

export default LoginForm;