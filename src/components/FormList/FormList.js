import React from 'react';
import { useSelector } from 'react-redux';

function FormList() {
  const users = useSelector(state => state.users);

  console.log(users);

  return (
    <>
      <tbody>
        {/* {JSON.stringify(users)} */}
        {users.map(user => (
          
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.phonenumber}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <div className="d-flex justify-content-around">
                  <span>Edit</span>
                  <span>Delete</span>
                </div>
              </td>
            </tr>
          
        ))}
      </tbody>
    </>
  );
}

export default FormList;
