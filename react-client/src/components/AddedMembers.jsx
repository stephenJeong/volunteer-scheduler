import React from 'react';

const AddedMembers = (props) => {
  let showTable = () => {
    if (props.allMembers.length > 0) {
      return <table>
          <tbody>
            <tr>
              <td colSpan="4" className="tableHeaders">Volunteers Added:</td>
            </tr>
            <tr>
              <td className="tableHeaders">Name</td>
              <td className="tableHeaders">Email</td>
              <td className="tableHeaders">Phone</td>
              <td className="tableHeaders">Dates Unavailable</td>
            </tr>
            {props.allMembers.map((member) => (
              <tr>
                <td>{member.firstName} {member.lastName}</td>
                <td>{member.email}</td>
                <td>{member.phone}</td>
                <td>{member.dateConflicts}</td>
              </tr>
            ))}
          </tbody>
        </table>
    }
  }

  return (
    <div>
      {showTable()}
    </div>
  );
}

export default AddedMembers;