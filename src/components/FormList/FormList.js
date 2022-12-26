import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../store/userSlice';
import Portal from '../Portal';

function FormList({ modalConfig, setModalConfig }) {
  // const users = useSelector(state => state.users);
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

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
                <span
                  onClick={() =>
                    setModalConfig({
                      ...modalConfig,
                      isOpen: true,
                      user: { ...user },
                    })
                  }
                >
                  Edit
                </span>
                <span onClick={() => dispatch(deleteUser(user.id))}>
                  Delete
                </span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
      <Portal modalConfig={modalConfig} setModalConfig={setModalConfig} />
    </>
  );
}

export default FormList;
