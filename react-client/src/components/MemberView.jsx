import React from 'react';

class MemberView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      member: ''
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    e.preventDefault();
    this.setState({ member: e.target.value });
  }

  memberData() {
    for (let i = 0; i < this.props.allMembers.length; i++) {
      if (this.props.allMembers[i].email === this.state.member) {
        let {organization, firstName, lastName, email, phone, dateConflicts, datesScheduled} = this.props.allMembers[i];
        return (
          <form className="centerForm">
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
            Dates Scheduled:
            <input value={datesScheduled} type="text" name="datesScheduled" onChange={this.props.handleChange} />
          </label>
          <label>
            Unavailable Sunday:
            <input value={dateConflicts} type="date" name="dateConflicts" onChange={this.props.handleChange} />
          </label>
          <button onClick={this.props.handleCreate} className="formBtn" id="finishBtn">Update</button>
        </form>
        );
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Who would you like to update?</h1>
        <form className="centerForm">
          <select name="member" onChange={this.handleSelect} className="memberSelect">
            <option value=""></option>
            {this.props.allMembers.map((member) => (
              <option key={member.email} value={member.email}>{member.firstName} {member.lastName}</option>
            ))}
          </select>
        </form>
        <div>
          {this.memberData()}
        </div>
    </div>
    );
  }
};

export default MemberView;